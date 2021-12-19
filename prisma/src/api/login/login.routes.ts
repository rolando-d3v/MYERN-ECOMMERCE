import {Router} from 'express';
import * as loginCtrl from './login.controller';

const router = Router()

router.post('/', loginCtrl.loginUser )


export default router