import json
import requests
import defs

STREAM_URL = f"https://stream-fxpractice.oanda.com/v3"

def get_prices():

    instrument_list = ['GBP_JPY', 'GBP_USD']

    params = dict(
        instruments=','.join(instrument_list)
    )

    url = f"{STREAM_URL}/accounts/{defs.ACCOUNT_ID}/pricing/stream"

    resp = requests.get(url, params=params, headers=defs.SECURE_HEADER, stream=True)

    print(resp.status_code)

    for price in resp.iter_lines():
        if price:
            decoded_price = json.loads(price.decode('utf-8'))
            if 'type' in decoded_price and decoded_price['type'] == 'PRICE':
                print(decoded_price)

if __name__ == "__main__":
    get_prices()

