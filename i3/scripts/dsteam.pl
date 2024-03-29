#!/usr/bin/env perl

# Copyright (c) 2016
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is 
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

# (Packages)
# perl-file-slurp perl-ipc-run3

use strict;
use warnings;
use feature qw(say state);
use Env qw(HOME);
use File::Slurp;
use Data::Dumper;
use IPC::Run3;

my $HISTORY_FILE = "$HOME/.dsteam_history";
#my $STEAMDIR = "$HOME/.local/share/Steam/SteamApps";
my $STEAMDIR = "$HOME/.local/share/Steam/steamapps";

sub rtrim($) {
	my $string = shift;
	$string =~ s/\s+$//;
	return $string;
}

sub read_appmanifest {
	my ($path) = @_;
	my ($name, $appid);
	open(my $manifest, '<', $path) or die "Can't open manifest: $!";
	while(<$manifest>) {
		if(/"name"\s*([^\n]+)/) {
            $name = $1;
            $name =~ s/^\"(.*)\"$/$1/s;
		}
		elsif(/"appid"\s*"(\d+)"/) {
			$appid = $1;
		}

		last if(defined $name and defined $appid);
	}
	close($manifest);
	return ($name, $appid);
}

sub read_steamapps {
	my @apps;
	opendir(my $steamdir, "$STEAMDIR") or die $!;
	while(my $file = readdir $steamdir) {
		next unless($file =~ /^appmanifest/);

		push @apps, read_appmanifest "$STEAMDIR/$file";
	}
	closedir $steamdir;
	return @apps;
}

my %database = read_steamapps;
my @history = reverse read_file($HISTORY_FILE, chomp => 1, err_mode => 'quiet');

my @lines = ('[', grep {
	state %seen;
	!$seen{$_}++
} @history, sort keys %database);

run3([qw/dmenu -i -f/], \join("\n", @lines), \my $app);
exit if($app =~ /^\s*$/);
write_file($HISTORY_FILE, { append => 1 }, $app);
run3([qw/steam -applaunch/, $database{rtrim $app}], undef);
