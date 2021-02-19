import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../public/uploads`);
    },
    filename: (req, file, cb) => {
        let lastIndex = file.originalname.lastIndexOf('.');
        // get the original extension of the file
        let extension = file.originalname.substring(lastIndex)
        // create the files on the server
        cb(null, `${file.originalname}-${Date.now()}${extension}`);
    }
});

const uploads = multer({ storage });

export default uploads;