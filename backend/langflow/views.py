import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

@csrf_exempt
def langflow_request(request):
    if request.method == 'POST':
        try:
            # Extract input data from the request
            input_value = request.POST.get('input_value', '')
            stream = request.POST.get('stream', 'false').lower() == 'true'

            # Langflow API details
            url = f"https://api.langflow.astra.datastax.com/lf/b1444534-75cd-484e-b621-881da671f9f4/api/v1/run/36ca77d4-e8d9-4e64-993c-fa22137b1b84?stream={stream}"
            headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer AstraCS:sRZvNHgPbLhnLhNUSSdPSkXj:5b7dcf8c939ab84a1e73fd4d36864bfb093b13457c442444b4859cbcea79ab7d"
            }

            # Tweaks as per the request
            tweaks = {
                "Prompt-fOSMD": {
                    "template": """
                    Based on text input
                    Provide a detailed Vedic astrology interpretation for each planet in each zodiac sign, following this structure:

                    Planet in Sign: Planet Name in Sign Name (e.g., Moon in Virgo (Kanya))
                    Provide a brief description of how the planet’s energy expresses in that sign, considering both the nature of the planet and the qualities of the zodiac sign.
                    Also include the house influence if applicable (e.g., "The Moon is in the 9th House of your chart" and its related interpretation).
                    Example for Moon in Virgo (Kanya):

                    The Moon in Virgo emphasizes practicality, organization, and a need for emotional structure. The individual may be highly analytical in their emotional responses and prone to worrying. The Moon's placement in the 9th House connects emotional well-being to beliefs, philosophical outlook, and the exploration of new ideas and cultures.
                    Generate this interpretation for all the planets and signs provided in the input."""
                },
                "TextInput-EcQ6b": {
                    "input_value": input_value
                }
            }

            # Prepare the body for the API request
            body = {
                "input_value": "message",
                "input_type": "chat",
                "output_type": "chat",
                "tweaks": tweaks
            }

            # Send the request to Langflow API
            response = requests.post(url, json=body, headers=headers)
            response_data = response.json()

            # Return the Langflow API response
            return JsonResponse(response_data)

        except Exception as e:
            # Handle exceptions and return error response
            return JsonResponse({'error': str(e)}, status=400)
