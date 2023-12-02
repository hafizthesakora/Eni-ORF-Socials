# Eni-ORF-Socials

## Overview

This is a social platform built for Eni Ghana off site, to help them share experiences and integrate more as a community
An app built by Hafiz Toyyib as Eni Ghana project

## Feature

1. Register and form validation
2. Signin and form validation
3. Forget Password
   a. Retrieve the Account
   b. Send a Password Reset Code
   c. Put the code and change your password
4. Account Activation
5. JSON web token for token generation to pass in headers for secure routes
6. React Redux for State Management
7. Dates generation and checking if the date falls within the age brackets given for an account
8. Search section in header
9. User Menu and All Menu
10. Extremely Responsive
11. Side bars for home to show System information for both left and right
12. Posting Stories with pre designed backgrounds that can be switched easily
13. Pop up for posting form
14. Logout
15. Authentication Middlewares
16. Resending Verification codes
17. Building an Emoji Picker for the keyboard
18. Previewing Images to be added to post and styling them in grid to look nice and orderly
19. Post model for MongoDb and post function with Images
20. Cloudinary and specific folder saving in cloudinary
21. Function for click outside to hide a popup
22. Submitting Post with loader
23. Error popup and error handling
24. Upload images and submit pots
25. Displaying all post
26. Profile page set up and information loading into state
27. Display profile post and check if the profile is yours or a visitors
28. Update profile picture
29. Use Cropper in updating profile picture
30. Get old profile pictures in frame and update using that instead
31. Update cover picture
32. Select old cover pictures and upfdate
33. Display profile informations
34. Edit information details
35. send Friend Request
36. Cancel
37. Accept
38. follow
39. Unfollow
40. Unfriend
41. delete Request
42. Display friends pictures in profile
43. Reactions on posts and get existing reacts and users
44. React and unreact a post
45. Show all reacts
46. See Reacts change live and fast
47. Create comments
48. Create comments with Image
49. Display comments with Load more option
50. Display post for only those you follow
51. Save and unsave a post
52. Download post Images
53. Delete Posts
54. Live Search
55. Add to search History
56. Display search history and sort
57. Delete from search history
58. Friends Request Page
59. Dark mode and light mode toggle
60. Skeleton loader effects.


### Few key takes

- NoSQL database
- MongoDB
- Deployed on Heroku
- Gives API endpoint for Front-end to communicate with.

## Dependencies / Tech-stack

- Express
- Nodemon
- Morgan
- MongoDB
- dotenv
- jsonwebtoken

## To run locally

- Clone the repository
- `npm install`
- `cp .env.example .env`
- Check `.env.example` to get credentials needed to connect with your mongoDb
