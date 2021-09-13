1. Statically Served file : means which can not be handled by express router or other middleware
   but instead directly forwarded to the file system

2. Templating Engines for Dynamic Content & Its Syntax
   - EJS  
     syntax : <p> <%= name %> </p>  
     Desc : Use normal HTML & Plane JS in your templates
   - Pug(jade)
     syntax : p # {name}
     Desc : Use minimal HTML and custom template language
   - Handlebars
     syntax : <p>{{name}}</p>  
     Desc : Use normal HTML and custom template language
3. How to connect pug
   ref file : app.js
   steps: 1. app.set('view engine', 'pug');
   app.set('views', 'views'); 2. in views make file with <template-engine-extention> ex: shop.pug 3. for rendering in route , use res.render('filename without extension',params)

   Note

   1. In step 1 ,we attach view engine , which refer to <template-engine>
   2. In Step 2 , we attach views with folder ,here views shows views only (same name we used)
   3. params is the data in object which you want to render in template
