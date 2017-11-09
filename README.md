# ClearSmilesBackEnd

In Terminal:

Clone repo.
cd into main folder
'npm install'
Install webpack if you don't have it. I think you can just do a 'webpack install'.
In two separate terminal tabs:
  'nodemon server.js'  
    -- should get:
      [nodemon] starting `node server.js`
      Server running, listening on 3000...
In other tab:
  'webpack'
    -- should get something like:
    Webpack is watching the files…
    Hash: eaf9a65b3bceccaebc8b
    Version: webpack 3.6.0
    Time: 5218ms
      Asset     Size  Chunks                    Chunk Names
    bundle.js  3.02 MB       0  [emitted]  [big]  main
    [165] (webpack)/buildin/global.js 509 bytes {0} [built]
    [300] ./public/index.jsx 1.57 kB {0} [built]
    [400] ./public/App.jsx 3.7 kB {0} [built]
    [401] ./public/Home/Home.jsx 6.3 kB {0} [built]
    [431] ./public/Doctors/Doctors.jsx 13 bytes {0} [built]
    [432] ./public/Map/Map.jsx 7.19 kB {0} [built]
    [435] ./public/Login.jsx 2.64 kB {0} [built]
    [656] (webpack)/buildin/amd-define.js 88 bytes {0} [built]
      + 647 hidden modules

Then you can run localhost:3000, should get login page. /home for homepage, etc. (see App.jsx for routes via hash router)

If you get 'something is wrong, rendering index.html,' something is wrong.
