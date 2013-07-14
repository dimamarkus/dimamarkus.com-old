require 'spec_helper'

describe "StaticPages" do

	describe "Home page" do
		it "should have the content 'Web Design'" do	
			visit '/static_pages/home'
			page.should have_selector('h2', text: 'Web Design')
		end

		it "should have the right title" do
			visit '/static_pages/home'
			page.should have_selector('title', text: 'Dima Markus')
		end
	end

	describe "Web Design page" do
		it "should have the content 'Web Design'" do	
			visit '/static_pages/web'
			page.should have_selector('h2', text: 'Web Design')
		end

		it "should have the right title" do
			visit '/static_pages/web'
			page.should have_selector('title', text: 'Dima Markus | Web Design')
		end
	end

	describe "Blog page" do
		it "should have the content 'Blog'" do	
			visit '/static_pages/blog'
			page.should have_selector('h2', text: 'Blog')
		end

		it "should have the right title" do
			visit '/static_pages/blog'
			page.should have_selector('title', text: 'Dima Markus | Blog')
		end
	end

	describe "Music page" do
		it "should have the content 'Music'" do	
			visit '/static_pages/music'
			page.should have_selector('h2', text: 'Music')
		end

		it "should have the right title" do
			visit '/static_pages/music'
			page.should have_selector('title', text: 'Dima Markus | Music')
		end
	end

	describe "About page" do
		it "should have the content 'About Me'" do	
			visit '/static_pages/about'
			page.should have_selector('h2', text: 'About')
		end

		it "should have the right title" do
			visit '/static_pages/about'
			page.should have_selector('title', text: 'Dima Markus | About')
		end
	end

end
