let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"], max = 0

for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].trim().split(' ')
    let num = words.length;
    if (num > max)
        max = num
}
console.log(max)