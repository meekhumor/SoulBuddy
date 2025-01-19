import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

@csrf_exempt
def handle_langflow_request(request):
    if request.method == 'POST':
        try:
            # Parse the incoming request data
            data = json.loads(request.body)
            name = data.get("name", "")
            dob = data.get("dob", "")
            time = data.get("time", "")
            place = data.get("place", "")
            user_input = data.get("user_input", "")

            # Validate required fields
            if not (name and dob and time and place and user_input):
                return JsonResponse({'error': 'All fields are required (name, dob, time, place, user_input)'}, status=400)

            # Langflow API details
            api_url = "https://api.langflow.astra.datastax.com/lf/877fb3b1-b7fe-4de6-a307-2ae41c950462/api/v1/run/34c10bac-0bf2-4552-b226-542dd6af4e44?stream=false"
            api_token = "AstraCS:AMfFCEUYCOeOlLCodIBiEhHO:d375eab723a74036fac464fdfae7f4ea0386f9711d93646d249c91a40d489712"

            # Prepare the payload for the Langflow API
            tweaks = {
                "Prompt-PTg01": {
                    "template": (
                        "You will receive the following user data:\n"
                        "Name: {name}\n"
                        "Date of Birth: {dob}\n"
                        "Time of Birth: {time}\n"
                        "Place of Birth: {place}\n"
                        "User Input: {user_input}\n"
                        "Provide recommendations based on the user's lifestyle, astrology, and numerology insights."
                    ),
                    "name": name,
                    "dob": dob,
                    "time": time,
                    "place": place,
                    "user_input": user_input
                }
            }

            payload = {
                "input_value": "message",
                "input_type": "chat",
                "output_type": "chat",
                "tweaks": tweaks
            }

            # Make a POST request to Langflow
            response = requests.post(
                api_url,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_token}"
                },
                json=payload
            )

            response.raise_for_status()
            return JsonResponse(response.json(), status=response.status_code)

        except requests.exceptions.RequestException as e:
            return JsonResponse({"error": str(e)}, status=500)
        except Exception as e:
            return JsonResponse({'error': 'An unexpected error occurred', 'details': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def langflow_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            input_value = data.get('input_value', '')
            if not input_value:
                return JsonResponse({'error': 'input_value is required'}, status=400)

            stream = data.get('stream', False)

            # Langflow API details
            url = f"https://api.langflow.astra.datastax.com/lf/b1444534-75cd-484e-b621-881da671f9f4/api/v1/run/36ca77d4-e8d9-4e64-993c-fa22137b1b84?stream={str(stream).lower()}"
            headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer AstraCS:sRZvNHgPbLhnLhNUSSdPSkXj:5b7dcf8c939ab84a1e73fd4d36864bfb093b13457c442444b4859cbcea79ab7d"
            }

            tweaks = {
                "Prompt-fOSMD": {
                    "template": "..."
                },
                "TextInput-EcQ6b": {
                    "input_value": input_value
                }
            }

            body = {
                "input_value": "message",
                "input_type": "chat",
                "output_type": "chat",
                "tweaks": tweaks
            }

            response = requests.post(url, json=body, headers=headers)
            response.raise_for_status()
            return JsonResponse(response.json())

        except requests.exceptions.RequestException as e:
            return JsonResponse({'error': str(e)}, status=500)
        except Exception as e:
            return JsonResponse({'error': 'An unexpected error occurred', 'details': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def proxy_api_request(request):
    if request.method == "POST":
        try:
            payload = json.loads(request.body)

            # Langflow API details
            api_url = "https://api.langflow.astra.datastax.com/lf/877fb3b1-b7fe-4de6-a307-2ae41c950462/api/v1/run/34c10bac-0bf2-4552-b226-542dd6af4e44?stream=false"
            api_token = "AstraCS:AMfFCEUYCOeOlLCodIBiEhHO:d375eab723a74036fac464fdfae7f4ea0386f9711d93646d249c91a40d489712"

            response = requests.post(
                api_url,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_token}"
                },
                json=payload
            )

            response.raise_for_status()
            return JsonResponse(response.json(), status=response.status_code)

        except requests.exceptions.RequestException as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)
