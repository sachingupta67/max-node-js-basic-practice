1. run command : yarn add -D eslint prettier husky lint-staged 
2. Create .prettierrc file and put rules in this
3. ESLINT SETUP
   - initialise eslint configuration & follow the instruction as per your requirement
     command : npx eslint --init 
4. create .eslintignore file 
5. How to check eslint is working 
    - Yarn : yarn eslint .
    - Node : npx eslint .
6. Extends prettier 
    - yarn add -D eslint-config-prettier
    - then extend in .eslintrc.json file
7. Husky Setup
    - npx mrm lint-staged
    - add some commands in script in package.json
    ```
        "lint": "eslint src/**/*.{js,jsx} --max-warnings=0",
		"lint:fix": "eslint --fix --max-warnings=0 src/**/*.{js,jsx}",
		"lint:fix-dry-run": "eslint --fix-dry-run src/**/*.{js,jsx}",
		"lint:show-only-errors": "eslint --quiet src/**/*.{js,jsx}",
		"prettier:fix": "prettier --write .",
		"prettier:check": "prettier --check .",
		"lint:fix-unchanged-file": "eslint --fix --max-warnings=0 $(git diff --name-only HEAD -- '*.jsx' '*.js' | xargs)"

        ```
    -  Also add these too outside scripts
        ```
         "lint-staged": {
		"*.{js}": [
			"yarn prettier:fix",
			"yarn lint:fix"
		]
	                    },
	    "husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	    }    

       ```




