<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Verify Email</title>
    </head>
<body>
    <h2>Assalamu Alaikum Ya <span>{{ $details['name'] }}</span></h2>
    <p>Muna buqatar Verification naka ne</p>
    <a href="http://127.0.0.1:8000/auth/verify/{{$details['token']}}/{{$details['hasEmail']}}">Click to Verify</a>
    <p>Thank You</p>
</body>
</html>