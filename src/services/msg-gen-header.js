function randMsgHead() {
    const selectNumbDec = Math.random() * 18;
    const wholeRandNumb = Math.floor(selectNumbDec);
    
    const headerMsgs = [
        'Welcome to my Page',
        'I hope you find this site usefull',
        `Here's Jonny (in a good way)!`,
        `Have a Great Day!`,
        'The internet stops here',
        `Let's use our powers for good!`,
        `Let's use our powers for good!`,
        `Great Job!`,
        'You should consider hiring me!',
        'Who ate all the bacon?',
        `I recently took up yoga!`,
        `Meditation is good for you!`,
        `=== fun; True!`,
        `You've reached Level 99!`,
        `I like gardening!`,
        `I like the rain!`,
        `Thanks for visiting!`,
        `Click here for fun!`,
        `You've reached level 999`
    ];
    // const randnumb = randMsgHead();
    // const randnumb = randMsgHead();
    const topMsg = headerMsgs[wholeRandNumb];
    
    return topMsg;
}

export default randMsgHead;