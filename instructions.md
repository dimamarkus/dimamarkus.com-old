###01 - Create the rails app

	rails new application_name --skip-test-unit
  
<br>

###02 - Update the gem file with the latest versions

source 'https://rubygems.org'

	gem 'rails', '3.2.13'
	# gem 'bootstrap-sass', '2.1'`
	gem 'bcrypt-ruby', '3.0.1'
	gem 'faker', '1.0.1'
	gem 'will_paginate', '3.0.3'
	# gem 'bootstrap-will_paginate', '0.0.6'
	gem 'jquery-rails', '2.0.2'

	group :development, :test do
	  gem 'sqlite3', '1.3.7', :require => 'sqlite3'
	  gem 'rspec-rails', '2.14'
	  gem 'guard-rspec', '1.2.1'
	  gem 'guard-spork', '1.2.0'  
	  gem 'childprocess', '0.3.6'
	  gem 'spork', '0.9.2'
	end
	
	# Gems used only for assets and not required
	# in production environments by default.
	group :assets do
	  gem 'sass-rails',   '3.2.5'
	  gem 'coffee-rails', '3.2.2'
	  gem 'uglifier', '1.2.3'
	
	  gem 'compass-rails' # you need this or you get an err
	  gem 'zurb-foundation', '~> 4.0.0'
	end
	
	group :test do
	  gem 'capybara', '1.1.2'
	  gem 'factory_girl_rails', '4.1.0'
	  gem 'cucumber-rails', '1.2.1', :require => false
	  gem 'database_cleaner', '0.7.0'
	  # gem 'launchy', '2.1.0'
	  # gem 'rb-fsevent', '0.9.1', :require => false
	  # gem 'growl', '1.0.3'
	end
	
	group :production do
	  gem 'pg', '0.12.2'
	end`

<br>
###03 - Install the required gems

	bundle install



<br>
###04 - Prep sqlite 

	sudo gem install sqlite3 --platform=ruby

This step is necessary for the next one to work on some versions of sqlite/rspec/rails.

<br>
###05 - Generate necessary Rspec files 

	rails generate rspec:install

<br>
###06 - Initialize GIT version control

	git init
   

<br>
###07 - Ignore DS_Store in git

Add .DS_Store to .gitignore


<br>
###08 - Perform initial commit

	git add .
	git commit -m "Initial commit"


<br>
###09 - Create a respository on GitHub

Go to www.github.com and create a new repository.

<br>
###10 - Push the local repository to GitHub

	git remote add origin git@github.com:dmi3000/dimamarkus.com.git
	git push -u origin master


<br> 
###11 - Push application into production right away

	heroku create --stack cedar
	git push heroku master

<br>
###12 - Test the production app
	
	heroku open


<br>
###13 - Create a new version control branch to create the static pages

	git checkout -b static-pages

<br>
###14 - Generate a static pages controller

You can put in the name of the pages that you want after the name of the controller. 

The `--no-test-framework` flag will supress the creation of spec files that we don't want. 

	rails generate controller StaticPages home web blog music about --no-test-framework


<br>
###15 - Generate a test for our static pages

	rails generate integration_test static_pages


<br>
###16 - Write the tests

For example, my *static_pages_spec.rb* file starts with the following  

	require 'spec_helper'

	describe "StaticPages" do
		describe "Home page" do
			it "should have the content 'Web Design'" do	
				visit '/static_pages/home'
				page.should have_content('Web Design')
			end
		end
	end




<br>
###17 - Nokogiri may give you problems, to fix them, reinstall it along with libxml2 

	brew install libxml2 libxslt
	sudo gem install nokogiri


<br>
###18 - To be able to run tests within Sublime Text quickly

Go to your `../sublime-text–2/Packages/RubyTest/RubyTest.sublime-settings` file.

Change the `"run_rspec_command"` and `"run_single_rspec_command:"` values to  

`"/Users/Dima/.rvm/gems/ruby-2.0.0-p0/bin/rspec {relative_path} --drb",`  

or whatever your exact path to the rspec gem is

<br>
###19 - Perform your first test

1. Make sure the test fails
2. Change your code
3. Make sure the test passes

<br>
###20 - Commit, switch to master branch and merge

	git add.
	git commit -m "Finish static pages"
	git checkout master
	git merge static-pages

<br>
###21 - Push to Github and Heroku

	git push
	git push heroku









