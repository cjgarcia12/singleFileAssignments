let appData = {
    name: 'Gmail',
    mailboxes: [
        'Inbox',
        'Sent',
        'Spam',
        'Draft',
    ],
    contacts: [
        {name: 'Ian', lastMessage: "Yo long time no see! How are things?"},
        {name: 'Cooper', lastMessage: "You tryna go get food sometime this week?"},
    ],
    emails: {
        inbox: [
            {from: 'Jane Doe', subject: 'Project Update', date: 'June 9, 2024', message: 'Hi Team, here is the latest update on the project. We have completed the initial phase and are moving on to the next steps. Please review the attached document for more details.'},
            {from: 'Mark Jones', subject: 'Team Meeting Reminder', date: 'June 10, 2024', message: 'Hello Team, this is a reminder for our meeting tomorrow at 10 AM. We will be discussing the new marketing strategy, so please come prepared with your ideas.'}
        ],
        sent: [
            {from: 'Me', subject: 'Re: Project Update', date: 'June 9, 2024', message: 'Hi Jane, thanks for the update. I have reviewed the document and everything looks good. Let’s proceed with the next steps as planned.'},
            {from: 'Me', subject: 'Re: Team Meeting Reminder', date: 'June 10, 2024', message: 'Hi Mark, I will be there for the meeting. I have some ideas to share about the new marketing strategy.'}
        ],
        spam: [
            {from: 'Spam Sender', subject: 'Win a Free iPhone!', date: 'June 7, 2024', message: 'Congratulations! You have been selected to win a free iPhone. Click the link below to claim your prize now.'},
            {from: 'ad Promotion', subject: 'Exclusive Offer Just For You!', date: 'June 8, 2024', message: 'Don’t miss out on this exclusive offer! Get 50% off on your next purchase. Click here to take advantage of this limited-time promotion.'}
        ],
        drafts: [
            {status: '', from: 'Me', subject: 'Re: Team Meeting Reminder', date: 'June 10, 2024', message: 'Hi Mark, I will be there for the meeting. I have some ideas to share about the new marketing strategy.'}
        ]
    }
}

console.log(appData.mailboxes);

console.log(appData.emails);

console.log(appData.emails.inbox[1].message);

appData.emails.drafts[0].status = 'Sent'

appData.emails.drafts.push({from: 'Me', subject: 'blank', message: 'blank'});

console.log(appData.emails.drafts);