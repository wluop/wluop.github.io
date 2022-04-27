//产品分类按钮2
// 页面加载完成后执行代码
$(document).ready(function() {
	//当点击导航按钮时触发事件
	$(".mob_fl_ico2").click(function() {
		//显示下拉菜单
		$(".mob_fl_bg2").slideToggle("slow");
		//导航按钮开关动画
		$(".mob_fl_ico2").toggleClass("mob_fl_show2")
	});
});

//产品分类按钮
// 页面加载完成后执行代码
$(document).ready(function() {
	//当点击导航按钮时触发事件
	$(".mob_fl_ico").click(function() {
		//显示下拉菜单
		$(".mob_fl_bg").slideToggle("slow");
		//导航按钮开关动画
		$(".mob_fl_ico").toggleClass("mob_fl_show")
	});
});

$(document).ready(function() {
	//当点击导航按钮时触发事件
	$(".mob_ico").click(function() {
		//显示下拉菜单
		$(".menu_bg").slideToggle(500);
		//导航按钮开关动画
		$(".mob_ico").toggleClass("mob_ico_show")
		// 延迟加载菜单文字
		$(".menu_bg a").each(function(index) {
			$(this).css({
				'animation-delay': (index / 10) + 's'
			});
		});
	});
});
//点击查看更多
// $(document).ready(function() {
// 	var h = 520;
// 	// 根据屏幕大小调整内容高度
// 	if (window.screen.width < h) {
// 		// 获取内容对象的高度，如果大于400
// 		if ($(".proshow_nr").height() > 400) {
// 			// 显示“点击查看更多”
// 			$(".ckgd").css({
// 				'display': 'block'
// 			});
// 			// ，则给内容对象固定高度
// 			$(".proshow_nr").css({
// 				'height': '400'
// 			});
// 			// 点击查看更多的时候
// 			$(".ckgd").click(function() {
// 				// 把按钮的高度设置改回原来的高度，并设置为不可见
// 				$(".ckgd").css({
// 					'height': 'auto',
// 					'display': 'none'
// 				});
// 				// 把内容对象的高度改回原来的高度
// 				$(".proshow_nr").css({
// 					'height': 'auto'
// 				});
// 			});
// 			// 如果内容对象不大于400的话，则不显示“点击查看更多按钮”
// 		} else {
// 			$(".ckgd").css({
// 				'height': 'auto',
// 				'display': 'none'
// 			});
// 			// 内容对象的高度也不会改变
// 			$(".proshow_nr").css({
// 				'height': 'auto'
// 			});
// 		}
// 	}else{
// 		if ($(".proshow_nr").height() > 900) {
// 			$(".ckgd").css({
// 				'display': 'block'
// 			});
// 			$(".proshow_nr").css({
// 				'height': '900px'
// 			});
// 			$(".ckgd").click(function() {
// 				$(".ckgd").css({
// 					'height': 'auto',
// 					'display': 'none'
// 				});
// 				$(".proshow_nr").css({
// 					'height': 'auto'
// 				});
// 			});
// 		} else {
// 			$(".ckgd").css({
// 				'height': 'auto',
// 				'display': 'none'
// 			});
// 			$(".proshow_nr").css({
// 				'height': 'auto'
// 			});
// 		}
// 	}
// });

// 导航栏固定顶部
	// 获取导航距离页面顶部的距离
	// 监听页面滚动
	$(window).scroll(function() {
		// 判断页面滚动超过导航时执行下面代码
		if ($(this).scrollTop() > 0) {
			// 给导航添加额外效果
			$(".top").addClass("top_box_move");
		} else {
			// 否则按照默认的效果
			$(".top").removeClass("top_box_move");
		}
	})
	
	
$(document).ready(function() {
	//当点击导航按钮时触发事件
	$(".clos").click(function() {
		//显示下拉菜单
		$(".c_lx").addClass("c_lxc");
		//导航按钮开关动画
		// 延迟加载菜单文字
	});
	
	
});

// $(document).ready(function() {
	
// 	var topH = $(".logo_box").offset().top;
// 	var h = 770;
	
// 	if (window.screen.width < h) {
// 		$(window).scroll(function() {
			
// 			if ($(document).scrollTop() > 0) {
				
// 				$(".logo_box").addClass("top_box_move");
// 			} else {
				
// 				$(".logo_box").removeClass("top_box_move");
// 			}
// 		})
// 	}
// });