TEMPLATEFILE="/home/ethanscharlie/Templates/doc.docx"
NAME=$1
CLASS=$2

TARGET_PATH="/home/ethanscharlie/Documents/School/12/$CLASS"

mkdir $TARGET_PATH
cp $TEMPLATEFILE "$TARGET_PATH/$NAME.docx"

flatpak run org.onlyoffice.desktopeditors "$TARGET_PATH/$NAME.docx"
