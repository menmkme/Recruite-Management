<?php

namespace App\Http\Controllers;

use App\Models\Matansa;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    use ApiResponseWithHttpSTatus;

    // public function __construct() {
    //     $this->middleware('auth:api', ['except' => ['index']]);
    // }

    public function index() { 
        $data['matansas'] = Matansa::where([['status', 'Dead']])->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK,true);
    }
}
