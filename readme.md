### Setup

Install node packages.

```bash
$ yarn
```

### Usage

Run an ngrok tunnel:

```bash
$ ngrok http 8000

ngrok by @inconshreveable                                                                                                   (Ctrl+C to quit)
                                                                                                                                            
Session Status                online                                                                                                        
Account                        (Plan: Pro)                                                                                                  
Version                       2.3.35                                                                                                        
Region                        United States (us)                                                                                            
Web Interface                 http://127.0.0.1:4040                                                                                         
Forwarding                    http://cc1ac687.ngrok.io -> http://localhost:8000                                                             
Forwarding                    https://cc1ac687.ngrok.io -> http://localhost:8000                                                            
                                                                                                                                            
Connections                   ttl     opn     rt1     rt5     p50     p90                                                                   
                              0       0       0.00    0.00    0.00    0.00                                                                  
                                                                                    
```

Then start the SNS parser:

```bash
$ nodemon
[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
SNS post parser listening on port 8000
```

