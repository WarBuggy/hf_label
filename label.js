let data = {
    email_phone: {
        vi: 'Email',
    },
    password: {
        vi: 'Mật khẩu',
    },
    login: {
        vi: 'Đăng nhập',
    },
    register: {
        vi: 'Đăng ký',
    },
    forgot_password: {
        vi: 'Quên mật khẩu',
    },
    wrong_username_or_password: {
        vi: 'Email hay mật khẩu không đúng.',
    },
    login_remember: {
        vi: 'Nhớ thông tin đăng nhập',
    },

    error_api_general: {
        vi: 'Hệ thống gặp lỗi {0}.\nXin vui lòng thử lại sau!',
    },

    send_email_confirm_code: {
        vi: 'Gửi mã.',
    },
    require_password_strong: {
        vi: 'Mật khẩu cần ít nhất 8 ký tự, ít nhất 1 chữ thường, 1 chữ hoa, 1 số và 1 ký tự đặc biệt (!, @, #, $, %, ^, & hay *).',
    },

    require_email_taken: {
        vi: 'Email đã được sử dụng cho tài khoản khác.',
    },
    require_email_confirm: {
        vi: 'Nhập mã xác nhận email. Nếu bạn chưa có, bấm nút "Gửi mã" và kiểm hộp thư liên quan.',
    },

    welcome_new_registered_user: {
        vi: 'Xin chào mừng quý khách đã gia nhập cộng đồng happynessfunds.com.<br><br>Chúng tôi luôn cố gắng hết mình để quý khách có được những trải nghiệm mua sắm tuyệt vời nhất.',
    },
    continue: {
        vi: 'Tiếp tục',
    },
    title_register: {
        vi: 'Đăng ký tài khoản phổ thông',
    },
    title_forgot_password: {
        vi: 'Yêu cầu mật khẩu mới'
    },
    require_email_correct: {
        vi: 'Mã xác nhận email không đúng. Xin vui lòng kiểm lại email chứa mã xác nhận trong hộp thư trên!',
    },
    change_password: {
        vi: 'Đổi mật khẩu',
    },
    require_email_not_registered: {
        vi: 'Email chưa được đăng ký.',
    },
    require_password_confirm_correct: {
        vi: 'Mật khẩu không trùng nhau.',
    },
    forget_password_changed: {
        vi: 'Mật khẩu của quý khách đã được thay đổi thành công.<br><br>Xin quý khách giữ gìn mật khẩu cẩn thận, không cho bất kỳ ai biết và thay đổi thường xuyên.<br><br>Chúc quý khách có những trải nghiệm mua sắm tuyệt vời tại happynessfunds.com.',
    },
    show_password: {
        vi: 'Hiển thị mật khẩu',
    },
};

if (typeof module == 'undefined' || typeof module.exports == 'undefined') {
    window.label = data;
} else {
    module.exports = data;
}