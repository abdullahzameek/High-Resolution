
Inspiration

“Social media sucks these days.” — These were the first few words we heard from one of the speakers at the opening ceremony, and they struck a chord with us.

I’ve never genuinely felt good while being on my phone, and like many others I started viewing social media as nothing more than a source of distraction from my real life and the things I really cared about.

In December 2019, I deleted my accounts on Facebook, Instagram, Snapchat, and WhatsApp.

For the first few months — I honestly felt great. I got work done, focused on my small but valuable social circle, and didn’t spend hours on my phone.

But one year into my social media detox, I realized that something substantial was still missing. I had personal goals, routines, and daily checklists of what I did and what I needed to do — but I wasn’t talking about them. By not having social media I bypassed superficial and addictive content, but I was also entirely disconnected from my network of friends and acquaintances. Almost no one knew what I was up to, and I didn’t know what anyone was up to either. A part of me longed for a level of social interaction more sophisticated than Gmail, but I didn’t want to go back to the forms of social media I had escaped from.

One of the key aspects of being human is personal growth and development — having a set of values and living them out consistently. Especially in the age of excess content and the disorder of its partly-consumed debris, more people are craving a sense of routine, orientation, and purpose in their lives. But it’s undeniable that humans are social animals — we also crave social interaction, entertainment, and being up-to-date with new trends.

Our team’s problem with current social media is its attention-based reward system. Most platforms reward users based on numeric values of attention, through measures such as likes, comments and followers. Because of this reward system, people are inclined to create more appealing, artificial, and addictive content. This has led to some of the things we hate about social media today — addictive and superficial content, and the scarcity of genuine interactions with people in the network.

This leads to a backward-looking user-experience in social media. The person in the 1080x1080 square post is an ephemeral and limited representation of who the person really is. Once the ‘post’ button has been pressed, the post immediately becomes an invitation for users to trap themselves in the past — to feel dopamine boosts from likes and comments that have been designed to make them addicted to the platform and waste more time, ultimately distorting users’ perception of themselves, and discouraging their personal growth outside of social media.

In essence — We define the question of reinventing social media as the following:

“How can social media align personal growth and development with meaningful content and genuine interaction among users?”

Our answer is High Resolution — a social media platform that orients people’s lives toward an overarching purpose and connects them with liked-minded, goal-oriented people.

The platform seeks to do the following:

1. Motivate users to visualize and consistently achieve healthy resolutions for personal growth

2. Promote genuine social interaction through the pursuit of shared interests and values

3. Allow users to see themselves and others for who they really are and want to be, through natural, progress-inspired content
What it does

The following are the functionalities of High Resolution (so far!):

After Log in or Sign Up:

1. Create Resolution

    Name your resolution, whether it be Learning Advanced Korean, or Spending More Time with Family.
    Set an end date to the resolution — i.e. December 31, 2022
    Set intervals that you want to commit to this goal for (Daily / Weekly / Monthly)

2. Profile Page

    Ongoing Resolutions
        Ongoing resolutions and level of progress
        Clicking on a resolution opens up the timeline of that resolution, containing all relevant posts and intervals
        Option to create a new resolution, or ‘Discover’ resolutions
    ‘Discover’ Page
        Explore other users’ resolutions, that you may be interested in
        Clicking on a resolution opens up the timeline of that resolution, allowing you to view the user’s past posts and progress for that particular resolution and be inspired and motivated!
        Clicking on a user takes you to that person’s profile
    Past Resolutions
        Past resolutions and level of completion
        Resolutions can either be fully completed or partly completed
        Clicking on a past resolution opens up the timeline of that resolution, containing all relevant posts and intervals

3. Search Bar

    Search for and navigate to other users’ profiles!

4. Sentiment Analysis based on IBM Watson to warn against highly negative or destructive content

    Two functions for sentiment analysis textual data on platform:
    One function to analyze the overall positivity/negativity of the text
    Another function to analyze the user of the amount of joy, sadness, anger and disgust
    When the user tries to create a resolution that seems to be triggered by negativity, sadness, fear or anger, we show them a gentle alert that this may not be best for them, and ask if they would like to receive some support.
    In the future, we can further implement this feature to do the same for comments on posts.
    This particular functionality has been demo'ed in the video, during the new resolution creation.
    There are two purposes for this functionality:
    a) We want all our members to feel that they are in a safe space, and while they are free to express themselves freely, we also want to make sure that their verbal actions do not pose a threat to themselves or to others.
    b) Current social media has shown to be a propagator of hate speech leading to violent attacks in real life. One prime example are the Easter Attacks that took place in Sri Lanka exactly a year ago: https://www.bbc.com/news/technology-48022530
    If social media had a mechanism to prevent such speech from being rampant, the possibility of such incidents occurring could have been reduced.
    Our aim is not to police speech, but rather to make people more aware of the impact of their words, and in doing so also try to provide resources or guidance to help people with emotional stress that they might be feeling on a day-to-day basis.
    We believe that education at the grassroots level through social media will have an impact on elevating the overall wellbeing of society.

How we built it

Our tech stack primarily consisted of React (with Material UI), Firebase and IBM Watson APIs. For the purpose of this project, we opted to use the full functionality of Firebase to handle the vast majority of functionality that would typically be done on a classic backend service built with NodeJS, etc. We also used Figma to prototype the platform, while IBM Watson was used for its Natural Language toolkits, in order to evaluate sentiment and emotion.
Challenges we ran into

A bulk of the challenges we encountered had to do with React Hooks. A lot of us were only familiar with an older version of React that opted for class components instead of functional components, so getting used to Hooks took a bit of time.

Another issue that arose was pulling data from our Firebase datastore. Again, this was a result of lack of experience with serverless architecture, but we were able to pull through in the end.
Accomplishments that we're proud of

We’re really happy that we were able to implement most of the functionality that we set out to when we first envisioned this idea. We admit that we might have bit a lot more than we could chew as we set out to recreate an entire social platform in a short amount of time, but we believe that the proof of concept is demonstrated through our demo
What we learned

Through research and long contemplation on social media, we learned a lot about the shortcomings of modern social media platforms, for instance how they facilitate unhealthy addictive mechanisms that limit personal growth and genuine social connection, as well as how they have failed in various cases of social tragedies and hate speech. With that in mind, we set out to build a platform that could be on the forefront of a new form of social media.

From a technical standpoint, we learned a ton about how Firebase works, and we were quite amazed at how well we were able to work with it without a traditional backend.
What's next for High Resolution

One of the first things that we’d like to implement next, is the ‘Group Resolution’ functionality. As of now, users browse through the platform, find and connect with liked-minded people pursuing similarly-themed interests. We think it would be interesting to allow users to create and pursue group resolutions with other users, to form more closely-knitted and supportive communities with people who are actively communicating and working towards achieving the same resolution.

We would also like to develop a sophisticated algorithm to tailor the users’ ‘Discover’ page, so that the shown content is relevant to their past resolutions. For instance, if the user has completed goals such as ‘Wake Up at 5:00AM’, and ‘Eat breakfast everyday’, we would recommend resolutions like ‘Morning jog’ on the discover page. By recommending content and resolutions based on past successful resolutions, we would motivate users to move onto the next step. In the case that a certain resolution was recommended because a user failed to complete a past resolution, we would be able to motivate them to pursue similar resolutions based on what we think is the direction the user wants to head towards.

We also think that High Resolution could be potentially become a platform for recruiters to spot dedicated and hardworking talent, through the visualization of users’ motivation, consistency, and progress. Recruiters may also be able to user the platform to communicate with users and host online workshops or events .

WIth more classes and educational content transitioning online, we think the platform could serve as a host for online lessons and bootcamps for users interested in various topics such as coding, music, gaming, art, and languages, as we envision our platform being highly compatible with existing online educational platforms such as Udemy, Leetcode, KhanAcademy, Duolingo, etc.

The overarching theme of High Resolution is motivation, consistency, and growth. We believe that having a user base that adheres passionately to these themes will open to new opportunities and both individual and collective growth.
