<?php
/**
 * Created by PhpStorm.
 * User: yangtanfang
 * Date: 2019/3/7
 * Time: 03:02
 */

namespace app\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function getApp()
    {
        return view('app');
    }
}