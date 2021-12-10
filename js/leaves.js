////////////////////////////////////
//             leaves.js
////////////////////////////////////


/* Define the number of leaves to be used in the animation */
/*定义要在动画中使用的叶数*/
const NUMBER_OF_LEAVES = 10;

/* Calls the init function when the "Falling Leaves" page is full loaded */
/*当“Falling Leaves”页满负荷时调用init函数*/
window.addEventListener('load', init, false);

function init()
{
    /* Get a reference to the element that will contain the leaves */
    /*获取对将包含叶的元素的引用*/
    var container = document.getElementById('leafContainer');
    /* Fill the empty container with new leaves */
    /*用新叶子把空容器装满*/
    for (var i = 0; i < NUMBER_OF_LEAVES; i++)
    {
        container.appendChild(createALeaf());
    }
}


/*
    Receives the lowest and highest values of a range and
    returns a random integer that falls within that range.
*/
/*
　　　接收一个范围的最小值和最大值，并且
 　　返回在该范围内的随机整数。
 */
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}


/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
   接收一个范围的最小值和最大值，并且
 　返回该范围内的随机浮点值。
*/
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}


/*
    Receives a number and returns its CSS pixel value.
    接收一个数字并返回其CSS像素值。
*/
function pixelValue(value)
{
    return value + 'px';
}


/*
    Returns a duration value for the falling animation.
    返回下降动画的持续时间值。
*/

function durationValue(value)
{
    return value + 's';
}


/*
    Uses an img element to create each leaf. "Leaves.css" implements two spin
    animations for the leaves: clockwiseSpin and counterclockwiseSpinAndFlip. This
    function determines which of these spin animations should be applied to each leaf.

使用img元素创建每个叶。“叶子.css“实现两次旋转
 树叶的动画：顺时针旋转和逆时针旋转和翻转。这个
 函数确定应将这些旋转动画中的哪一个应用于每个叶。

*/
function createALeaf()
{
    /* Start by creating a wrapper div, and an empty img element
    首先创建一个包装器div和一个空的img元素 */
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');

    /* Randomly choose a leaf image and assign it to the newly created element
    随机选择一个叶子图像并将其分配给新创建的元素
    将照片放到这里 有四张的话 就写5*/
    image.src = 'images/autumn/realLeaf' + randomInteger(1, 5) + '.png';

    leafDiv.style.top = "-100px";

    /* Position the leaf at a random location along the screen
    将叶沿屏幕随机放置　　写真のサイズ 　例えば１０２４px（０，１０２４）*/
    leafDiv.style.left = pixelValue(randomInteger(0, 1024));

    /* Randomly choose a spin animation
    随机选择旋转动画*/
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';

    /* Set the -webkit-animation-name property with these values
    使用以下值设置-webkit animation name属性*/
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;

    /* Figure out a random duration for the fade and drop animations
    为淡入淡出和放下动画指定一个随机持续时间*/
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));

    /* Figure out another random duration for the spin animation
    为旋转动画计算另一个随机持续时间*/
    var spinDuration = durationValue(randomFloat(4, 8));
    /* Set the -webkit-animation-duration property with these values
    使用这些值设置-webkit animation duration属性 */
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var leafDelay = durationValue(randomFloat(0, 5));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>　将<img>添加到<div>
    leafDiv.appendChild(image);

    /* Return this img element so it can be added to the document
    返回此img元素，以便将其添加到文档中*/
    return leafDiv;
}
