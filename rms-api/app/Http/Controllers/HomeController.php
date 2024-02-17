<?php

namespace App\Http\Controllers;

use App\Models\Matansa;
use App\Models\yaransa;
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
        $data['yaransas_alive'] = yaransa::where([['status', 'Alive']])->get();
        $data['yaransas_dead'] = Matansa::where([['status', 'Dead']])->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK,true);
    }
}
