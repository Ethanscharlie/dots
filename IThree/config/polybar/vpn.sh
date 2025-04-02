STATUS=$(mullvad status)
#echo ${STATUS:0:3}

if [ ${STATUS:0:3} = 'Dis' ];
then
	echo " "
fi
if [ ${STATUS:0:3} = 'Con' ];
then
	echo " "
fi

echo ${STATUS}
