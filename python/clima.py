
from string import *
import json, sys
from urllib.request import urlopen



#parameters
params1 = "<||^{tss+^=r]^/\A/+|</`[+^r]`;s.+|+s#r&sA/+|</`y_w"
params2 = ':#%:%!,"'
params3 = "-#%&!&')&:-/$,)+-.!:-::-"
params4 = params2 + params3 
params_id = "j+^^=.w"
unit = [ "k", "atm"]

data1 = printable
data2 = punctuation+ascii_uppercase+ascii_lowercase+digits
encrypt = str.maketrans(dict(zip(data1, data2)))
decrypt = str.maketrans(dict(zip(data2, data1)))


#obter função clima
def getWeather(weather):
    lin = params1.translate(decrypt)
    kim = params4.translate(decrypt)
    idm = params_id.translate(decrypt)
    
    link = urlopen(lin + weather + idm + kim).read()
    getjson = json.loads(link)
    #result = getjson.gets()
    print("A previsao do tempo em {}".format(weather),'\n')
   

    main = getjson.get("main", {"temp"}) 
    main2 = getjson.get("main", {"pressure"})
    main3 = getjson.get("main", {"humidity"})
    main4 = getjson.get("main", {"temp_min"})
    main5 = getjson.get("main", {"temp_max"}) 
    main6 = getjson.get("main", {"tomorrow"})
    wind = getjson.get("wind", {"speed"}) 
    sys = getjson.get("sys", {"country"}) 
    coord = getjson.get("coord", {"lon"})
    coord1 = getjson.get("coord", {"lat"})
    weth = getjson.get("weather", {"description"})
    # output objects
    #print("Description :",weth['description'])
    print("Temperatura :",round(main['temp']-273), "deg")
    print("Pressao :",main2["pressure"],"atm")
    print("Umidade :",main3["humidity"])
    print("Velocidade-vento :",wind['speed'],"mph")
    print("Max-temp: {}c , Min-temp: {}c".format(round(main5['temp_max']-273),round(main4['temp_min']-273)))
    print("Latitude :",coord['lat'])
    print("Longitude :",coord['lon'])
    print("Pais :",sys['country'])

    


ent = input() or "cacule"

try:
    getWeather(ent)    
except:
    print("Coloque outra cidade")
finally:
    print("\n")
    print("Tschüss / Goodbye / Adeus")