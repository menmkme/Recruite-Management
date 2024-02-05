<?php

namespace App\Exceptions;

use App\Traits\ApiResponseWithHttpSTatus;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;

//use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponseWithHttpSTatus;
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        //$this->reportable(function (Throwable $e) {
        $this->renderable(function(Exception $e, $request) {
            return $this->handleException($request, $e);
        });
        
    }

    public function handleException($request, Exception $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
            return $this->apiResponse(
                'Model not-found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof NotFoundHttpException) {
            return $this->apiResponse(
                'Not Found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof MethodNotAllowedException) {
            return $this->apiResponse(
                'Bad Method',
                null,
                Response::HTTP_METHOD_NOT_ALLOWED,
                false
            );
        } else if ($exception instanceof HttpException) {
            return $this->apiResponse(
                'Not Found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof UnauthorizedException) {
            return $this->apiResponse(
                'Unauthorized',
                null,
                Response::HTTP_UNAUTHORIZED,
                false
            );
        } else if ($exception instanceof AuthenticationException) {
            return $this->apiResponse(
                'Authorization Error',
                null,
                Response::HTTP_UNAUTHORIZED,
                false
            );
        } else {
            return $this->apiResponse(
                $exception->getMessage(),
                null,
                Response::HTTP_INTERNAL_SERVER_ERROR,
                false
            );
        }
    }
}
