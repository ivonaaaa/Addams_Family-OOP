(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("mapa1",
{ "compressionlevel":-1,
 "height":15,
 "infinite":false,
 "layers":[
        {
         "data":[28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 35, 35, 35, 43, 43, 43, 43, 43, 27, 28, 29, 6, 7, 32, 32, 32, 40, 30, 31,
            36, 37, 38, 39, 40, 43, 44, 45, 46, 47, 48, 43, 43, 43, 44, 45, 46, 47, 48, 27, 28, 29, 14, 15, 32, 40, 40, 48, 30, 31,
            44, 45, 46, 47, 48, 3, 4, 5, 6, 7, 43, 44, 45, 46, 47, 48, 48, 27, 27, 28, 29, 30, 22, 23, 40, 48, 48, 29, 30, 31,
            30, 31, 32, 9, 10, 11, 12, 13, 14, 15, 16, 43, 44, 45, 46, 47, 48, 29, 27, 28, 29, 30, 30, 31, 48, 27, 28, 29, 30, 31,
            38, 39, 40, 17, 18, 19, 20, 21, 22, 23, 24, 43, 44, 45, 46, 47, 48, 31, 27, 28, 29, 30, 31, 32, 44, 27, 28, 29, 30, 31,
            46, 47, 48, 25, 26, 27, 28, 29, 30, 31, 32, 27, 28, 29, 30, 31, 32, 32, 32, 32, 32, 32, 6, 7, 32, 32, 32, 32, 30, 31,
            27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40, 27, 27, 28, 27, 28, 29, 30, 31, 32, 40, 40, 14, 15, 40, 40, 40, 40, 30, 31,
            35, 36, 37, 38, 39, 40, 29, 30, 6, 7, 27, 35, 35, 36, 35, 36, 37, 38, 39, 40, 48, 48, 22, 23, 48, 48, 48, 48, 30, 31,
            6, 7, 45, 6, 7, 48, 27, 27, 14, 15, 35, 43, 43, 44, 43, 44, 45, 46, 47, 48, 27, 43, 30, 31, 45, 46, 47, 48, 30, 31,
            14, 15, 43, 14, 15, 27, 27, 27, 22, 23, 43, 43, 44, 45, 46, 47, 48, 27, 28, 29, 35, 43, 44, 45, 46, 47, 48, 30, 31, 32,
            22, 23, 45, 22, 23, 35, 35, 35, 30, 31, 43, 44, 45, 46, 47, 48, 43, 27, 27, 27, 43, 44, 45, 46, 47, 48, 28, 29, 30, 31,
            30, 31, 45, 30, 31, 43, 43, 43, 44, 45, 46, 47, 48, 35, 35, 35, 43, 35, 35, 35, 43, 44, 45, 46, 47, 48, 28, 29, 30, 31,
            44, 45, 46, 47, 43, 44, 45, 46, 47, 48, 40, 40, 40, 43, 43, 43, 44, 43, 43, 43, 44, 45, 46, 47, 48, 27, 28, 29, 30, 31,
            44, 45, 46, 47, 43, 44, 45, 46, 47, 48, 48, 48, 48, 32, 32, 32, 32, 6, 7, 32, 32, 32, 32, 32, 47, 27, 28, 29, 30, 31,
            44, 45, 46, 47, 48, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 14, 15, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32],
         "height":15,
         "id":1,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
            0, 0, 0, 0, 0, 0, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
            0, 0, 0, 0, 0, 0, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
            0, 0, 0, 0, 0, 0, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
            0, 0, 0, 0, 0, 0, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222,
            0, 0, 0, 0, 0, 0, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251,
            0, 0, 0, 0, 0, 0, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280,
            0, 0, 0, 0, 0, 0, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
            0, 0, 0, 0, 0, 0, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
            0, 0, 0, 0, 0, 0, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367,
            0, 0, 0, 0, 0, 0, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396,
            0, 0, 0, 0, 0, 0, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425,
            0, 0, 0, 0, 0, 0, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454,
            455, 456, 457, 458, 459, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483,
            484, 485, 486, 487, 488, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],
         "height":15,
         "id":2,
         "name":"background2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "class":"Ground",
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 462, 462, 462, 462, 462, 462, 462, 462,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 462, 462, 462, 462, 462, 462, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 477, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 462, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 477, 477, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            455, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483,
            484, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],
         "height":15,
         "id":3,
         "name":"ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "class":"Sprite",
         "data":[513, 524, 525, 526, 527, 528, 0, 536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            589, 596, 597, 598, 599, 600, 0, 610, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":15,
         "id":4,
         "name":"Gomez",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Gomez"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "class":"Sprite",
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 645, 646, 647, 648,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 649, 650, 651, 652,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":15,
         "id":5,
         "name":"Enemies",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Enemies"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "class":"Items",
         "draworder":"topdown",
         "id":7,
         "name":"items",
         "objects":[
                {
                 "class":"",
                 "gid":653,
                 "height":32,
                 "id":1,
                 "name":"coin1",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":748.5,
                 "y":252.5
                }, 
                {
                 "class":"",
                 "gid":653,
                 "height":32,
                 "id":2,
                 "name":"coin3",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":925.5,
                 "y":90
                }, 
                {
                 "class":"",
                 "gid":653,
                 "height":32,
                 "id":3,
                 "name":"coin2",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":323.5,
                 "y":80
                }, 
                {
                 "class":"",
                 "gid":655,
                 "height":32,
                 "id":4,
                 "name":"heart1",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":523.5,
                 "y":157
                }, 
                {
                 "class":"",
                 "gid":453,
                 "height":32,
                 "id":5,
                 "name":"door1",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":896,
                 "y":383.083333333333
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"Items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":6,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":8,
         "firstgid":1,
         "image":"maps\/v10\/pics\/background1.png",
         "imageheight":222,
         "imagewidth":256,
         "margin":0,
         "name":"background1",
         "spacing":0,
         "tilecount":48,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":29,
         "firstgid":49,
         "image":"maps\/v10\/pics\/ground1.png",
         "imageheight":526,
         "imagewidth":956,
         "margin":0,
         "name":"ground1",
         "spacing":0,
         "tilecount":464,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":11,
         "firstgid":513,
         "image":"maps\/v10\/pics\/Gomez_right.png",
         "imageheight":192,
         "imagewidth":352,
         "margin":0,
         "name":"Gomez_right",
         "spacing":0,
         "tilecount":66,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#a34d4d"
        }, 
        {
         "columns":11,
         "firstgid":579,
         "image":"maps\/v10\/pics\/Gomez_left.png",
         "imageheight":192,
         "imagewidth":352,
         "margin":0,
         "name":"Gomez_left",
         "spacing":0,
         "tilecount":66,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#a34d4d"
        }, 
        {
         "columns":4,
         "firstgid":645,
         "image":"maps\/v10\/pics\/mummy_right.png",
         "imageheight":32,
         "imagewidth":128,
         "margin":0,
         "name":"mummy_right",
         "spacing":0,
         "tilecount":4,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#100020"
        }, 
        {
         "columns":4,
         "firstgid":649,
         "image":"maps\/v10\/pics\/mummy_left.png",
         "imageheight":32,
         "imagewidth":128,
         "margin":0,
         "name":"mummy_left",
         "spacing":0,
         "tilecount":4,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#100020"
        }, 
        {
         "columns":3,
         "firstgid":653,
         "image":"maps\/v10\/pics\/objects.png",
         "imageheight":32,
         "imagewidth":96,
         "margin":0,
         "name":"objects",
         "spacing":0,
         "tilecount":3,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":30
});