function randMsgHead() {
    const selectNumbDec = Math.random() * 6;
    const wholeRandNumb = Math.floor(selectNumbDec);
    
    const headerMsgs = [
        'Welcome to my Page',
        'I hope you find this site usefull',
        'Here`s Jonny!',
        'The internet stops here',
        'Let`s use our powers for good',
        'You should hire me!',
        'Who ate all the bacon?'
    ];
    // const randnumb = randMsgHead();
    // const randnumb = randMsgHead();
    const topMsg = headerMsgs[wholeRandNumb];
    
    return topMsg;
}

export default randMsgHead;