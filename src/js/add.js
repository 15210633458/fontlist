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

    var id = location.search
    console.log(id)
    if (id) {
        id = id.split('?')[1].split("=")[1]
            //详情
        $.ajax({
            url: "/api/find",
            data: {
                Id: id
            },
            success: function(data) {
                //console.log(data)

                if (data.code == 1) {
                    var val = data.data
                    name.value = val.name;
                    age.value = val.age;
                    phone.value = val.phone;
                    add.value = val.add;
                    Id.value = val.Id
                }
            }
        })
        sure.onclick = function() {
            $.ajax({
                url: "/api/change",
                type: 'post',
                data: {
                    name: name.value,
                    age: age.value,
                    phone: phone.value,
                    add: add.value,
                    Id: Id.value
                },
                success: function(data) {
                    // console.log(data)
                    alert(data.mes)
                    if (data.code == 1) {
                        location.href = "../index.html"
                    }
                }
            })
        }
    } else {
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
    }
})