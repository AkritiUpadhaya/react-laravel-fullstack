<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;

class AuthController extends Controller
{
   
    public function signup(SignupRequest $request){
        $data = $request-> validate();
        $user= User::create([
            'name'=> $data['name'],
            'email'=> $data['email'],
            'password'=>bcrypt($data['password'])

        ]);
        $user-> createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }
    public function login(LoginRequest $request){   
       
    }
    public function logout(Request $request){

    }

    }

