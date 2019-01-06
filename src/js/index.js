require.config({
    baseUrl: "js/",
    paths: {
        "mui": "lib/mui",
        "jquery": "lib/jquery"
    }
})

require(['mui', 'jquery'], function(mui, $) {
    var con = document.getElementById('con');
    var add = document.getElementById('add');


    //渲染页面
    $.ajax({
        url: "/api/list",
        success: function(data) {
            // console.log(data)
            if (data.code == 1) {
                var html = '';
                data.data.forEach((i) => {
                    html += `<li>
                               ${i.name}
                                <div>
                                    <span class="details" data-id=${i.Id}>产薰详情</span>
                                    <span class="remove" data-id=${i.Id}>删除</span>
                                </div>
                            </li>`
                })
            }
            con.innerHTML = html
        }
    })

    //添加
    add.onclick = function() {
        location.href = '../page/add.html'
    }

    //删除
    con.onclick = function(e) {
        if (e.target.className == "remove") {
            var id = e.target.getAttribute('data-id')
            $.ajax({
                url: "/api/remove",
                data: {
                    Id: id
                },
                success: function(data) {
                    //console.log(data)
                    alert(data.mes)
                    if (data.code == 1) {
                        location.href = '../index.html'
                    }
                }
            })
        }
    }

    //详情
    con.onclick = function(e) {
        if (e.target.className == "details") {
            var id = e.target.getAttribute('data-id')
            location.href = '../page/add.html?Id=' + id
        }
    }
})