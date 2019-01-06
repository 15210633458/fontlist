require.config({
    baseUrl: "/js/",
    paths: {
        "mui": "lib/mui",
        "jquery": "lib/jquery"
    }
})

require(["mui", "jquery"], function(mui, $) {
    var name = document.getElementById('user');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');
    var add = document.getElementById('add');
    var Id = document.getElementById('Id');
    var sure = document.getElementById('sure')

    //添加
    sure.onclick = function() {
        $.ajax({
            url: "/api/add",
            type: 'post',
            data: {
                name: name.value,
                age: age.value,
                phone: phone.value,
                add: add.value,
                Id: Id.value
            },
            success: function(data) {
                //console.log(data)
                alert(data.mes)
                if (data.code == 1) {
                    location.href = "../index.html"
                }
            }
        })
    }

})