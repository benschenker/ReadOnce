**Live Demo**: http://ReadOnce.herokuapp.com 

ReadOnce
-------
A NodeJS app that allows for sensitive-but-changeable information to be easily shared to non-technical users.  ReadOnce will store a plaintext message so that it can be accessed with a URL, but the message will be deleted after the URL is clicked on one time.  With ReadOnce, the link to the message can be sent by Alice in an unencrypted email and if an unintended user(Eve) gets access to the email there are two possibilities:

1. The link has already been clicked on by the intended recipient(Bob) and the message has been deleted.
2. The link has not yet been clicked on by Bob yet and Alice sees the message.  However, when Bob tries to see the message he is notified that the message does not exist, he informs Alice that the sensitive message is now compromised.

Obviously, it is safer to send sensitive information using public key encryption, but that requires some technical knowhow on behalf of the receiver of the information.  This method also gives the sender and receiver the ability to tell if the sensitive information has been compromised.  In many cases (passwords being the prime example) this is incredibly useful and the password can just be reset.  

The main weakness in this system is that whoever has control of the database server will have access to the sensitive data, thus the sender of the information or a trusted third party should host this application.  

License
-------

The MIT License (MIT)

Copyright (c) 2014 Benjamin Schenker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
