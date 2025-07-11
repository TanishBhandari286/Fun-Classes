function fun(num) {
    if (num == 0) return

    fun(num - 1)
    console.log(num)
}

let a = 10
fun(a)
