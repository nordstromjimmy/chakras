var violetText = 'The crown chakra is linked to every other chakra (and therefore every organ in this system), and so it affects not just all of those organs, but also our brain and nervous system. It is considered the chakra of enlightenment and represents our connection to our life’s purpose and spirituality. Those with a blocked crown chakra may seem narrow-minded, skeptical, or stubborn. When this chakra is open, it is thought to help keep all the other chakras open and to bring the person bliss and enlightenment. As these are all energetic centers of the body that correspond to feelings, one of them probably resonated with you as you were reading. A different one may resonate with you tomorrow. It’s likely that one resonates with you more than any others as a continuous problem, a chakra where you often deal with blocks. Other blockages may pop up every now and then. In the chakra system, these patterns have specific terms and there are recommended treatments.';
var violetHeader = 'Crown Chakra';

var indigoText = 'Since this chakra is physically located on the head, blockages can manifest as headaches, issues with sight or concentration, and hearing problems. People who have trouble listening to reality (who seem to “know it all”) or who are not in touch with their intuition may also have a block. When open and in alignment, it’s thought that people will follow their intuition and be able to see the big picture.'
var indigoHeader = 'Third Eye Chakra';

var blueText = 'As one would expect, this chakra is connected to our ability to communicate verbally. Voice and throat problems as well as any problems with everything surrounding that area, such as the teeth, gums, and mouth, can indicate a blockage. Blocks or misalignment can also be seen through dominating conversations, gossiping, speaking without thinking, and having trouble speaking your mind. When in alignment, you will speak and listen with compassion and feel confident when you speak because you know you are being true to yourself with your words.'
var blueHeader = 'Throat Chakra';

var greenText = 'Blocks in our heart chakra can manifest in our physical health through heart problems, asthma, and weight issues. But blocks are often seen even more clearly through people’s actions. People with heart chakra blocks often put others first, to their own detriment. It’s the middle of the seven chakras, so it bridges the gap between our upper and lower chakras, and it also represents our ability to love and connect to others. When out of alignment, it can make us feel lonely, insecure, and isolated.'
var greenHeader = 'Heart Chakra';

var yellowText = 'Blockages in the third chakra are often experienced through digestive issues like ulcers, heartburn, eating disorders, and indigestion. It’s the chakra of our personal power. This means it’s related to our self-esteem and self-confidence.'
var yellowHeader = 'Solar Plecus Chakra';

var orangeText = 'Issues with this chakra can be seen via problems with the associated organs, like urinary tract infections, lower back pain, and impotency. Emotionally, this chakra is connected to our feelings of self-worth, and even more specifically, our self-worth around pleasure, sexuality, and creativity.'
var orangeHeader = 'Sacral Chakra';

var redText = 'A blocked root chakra can manifest as physical issues like arthritis, constipation, and bladder or colon problems, or emotionally through feeling insecure about finances or our basic needs and well-being. When it’s in alignment and open, we will feel grounded and secure, both physically and emotionally.'
var redHeader = 'Root Chakra';


function openViolet() {
    document.getElementById('content-header').innerHTML = violetHeader;
    document.getElementById('content-text').innerHTML = violetText;  
}

function openIndigo() {
    document.getElementById('content-header').innerHTML = indigoHeader;
    document.getElementById('content-text').innerHTML = indigoText;
}

function openBlue() {
    document.getElementById('content-header').innerHTML = blueHeader;
    document.getElementById('content-text').innerHTML = blueText;
}

function openGreen() {
    document.getElementById('content-header').innerHTML = greenHeader;
    document.getElementById('content-text').innerHTML = greenText;
}

function openYellow() {
    document.getElementById('content-header').innerHTML = yellowHeader;
    document.getElementById('content-text').innerHTML = yellowText;
}

function openOrange() {
    document.getElementById('content-header').innerHTML = orangeHeader;
    document.getElementById('content-text').innerHTML = orangeText;
}

function openRed() {
    document.getElementById('content-header').innerHTML = redHeader;
    document.getElementById('content-text').innerHTML = redText;
}
