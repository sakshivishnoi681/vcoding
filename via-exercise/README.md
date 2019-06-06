## ECMAScript 6 Giphy Search Gallery

Point1 - Application can build using command    "npm run webpack"

Point2 - Application can run unit test using commond     "npm test"

details - for unit testing  I am using Jasmine for now i did not intall karma test runner. Unit test are only for understanding how to write. I did not covewr real testing

Point3 - For responsiveness i am using Flex Model (Lib- Bootstrap only for header we can remove it as well bootstrap provides differnt class for diff viewport)

Point4 - For loading GIFs i have created appkey as per instruction

Point5 - For now i am not using any external lib. this code is purely written in ES6

Point6 - I can use debounce for continue search and best way use Observable for search with combination of Debounce+SwitchMap operator of RXJS

Point7 -  I created service constants file separately. For now i dont have much to save but in application separete modules help

Point8 - I used Araia-attributes for accesibility

Point9 - For Progressive web i created Manifest file and service worker

Point10 - For now i did not implemnt infinite scroll we can use framework or any js lib. in native js we can attache event on scroll and track viewport and position. 

Point 11 - We should use sass preprocessor for design instead for direct style file