<?php

namespace App\Http\Controllers;

use App\Models\Matansa;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MatansaController extends Controller
{
    use ApiResponseWithHttpSTatus;
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['matansas'] = Matansa::latest()->paginate(8);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
        // try {
        //     $data['matansas'] = Matansa::latest()->paginate(4);
        //     return response()->json(['status'=>true, 'message'=> 'Success', 'data'=> $data]);
        
        // } catch (\Throwable $th) {
        //     return response()->json(['status'=>false, 'message'=> $th->getMessage()]);
        
        // }

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Matansa $matansa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Matansa $matansa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Matansa $matansa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Matansa $matansa)
    {
        //
    }
}
