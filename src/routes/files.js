import _ from 'lodash';
import { Router } from 'express';
import { baseUrl } from '../config';
import uploaderMiddleware from '../middleware/uploaderMiddleware';
 
const router = Router();

/** 
 * @ DESC Route to upload single file
 * @ End-PT 'api/files/single
 * @ Access Public
 * @ TYPE POST
 */
router.post('/single', uploaderMiddleware.single('file'), async (req, res) => {
    let filePath = req.file.path.replace('public', baseUrl);
    filePath = filePath.split('src')[1].substring(1, filePath.length);
    console.log(req.file);
    return res.json({ 
        filePath
    })
});

/** 
 * @ DESC Route to upload multiple file
 * @ End-PT 'api/files/multi
 * @ Access Public
 * @ TYPE POST
 */
router.post('/multi', uploaderMiddleware.array('files'), async (req, res) => {
    let { files } = req;
    let resp = [];
    _.forEach(files, (file) => {
        let filePath = file.path.replace('public', baseUrl);
        filePath = filePath.split('src')[1].substring(1, filePath.length);  
        resp.push(filePath);
    });
    console.log(req.files);
    return res.json(resp);
});

export default router;