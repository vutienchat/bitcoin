import "./App.css";
import Logo from "./assets/images/logo.png";
import Banner from "./assets/images/banner.png";
import img1 from "./assets/images/icon.svg";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import img5 from "./assets/images/img5.png";
import img6 from "./assets/images/img6.png";
import icon4 from "./assets/images/icon4.svg";
import icon5 from "./assets/images/icon5.svg";
import icon6 from "./assets/images/icon6.svg";
import icon7 from "./assets/images/icon7.svg";
import icon8 from "./assets/images/icon8.svg";
import icon9 from "./assets/images/icon9.svg";
import icon10 from "./assets/images/icon10.svg";
import icon11 from "./assets/images/icon11.svg";
import icon12 from "./assets/images/icon12.svg";
import icon13 from "./assets/images/icon13.svg";
import icon14 from "./assets/images/icon14.svg";
import icon15 from "./assets/images/icon15.svg";
import icon16 from "./assets/images/icon16.svg";
import icon17 from "./assets/images/icon17.svg";
import icon18 from "./assets/images/icon18.svg";

function App() {
  return (
    <div className="bg-[#161822]">
      <header className="flex justify-between  items-center px-16 py-5">
        <div className="w-64">
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-2">
          <button className="bg-[#20BAA0] text-white rounded-md px-5 py-1.5">
            Đăng nhập
          </button>
          <button className="border-[2px] border-white text-white rounded-md px-5 py-1.5">
            Đăng kí
          </button>
        </div>
      </header>
      <div className="relative">
        <img src={Banner} className="w-full" alt="" />
        <div className="absolute inset-0 flex items-center justify-end mr-24">
          <div>
            <p className="text-[32px] text-white w-96">
              Mua, giao dịch và nắm giữ hơn 350 loại tiền mã hóa trên ASII Trade
            </p>
            <p className="text-white flex mt-2">
              <img src={img1} alt="" className="w-4 mr-1" />
              <span>Giao dịch không mất phí, nạp tiền tỉ lệ 1:1</span>
            </p>
            <button
              className="text-[#F16D27] 
              bg-[#FFF14B] px-5 py-1.5 my-5 font-medium rounded-md"
            >
              Đăng kí ngay
            </button>
            <div className="flex text-white gap-2">
              <div className="text-sm font-light">www.asiitrade.com</div>
              <img src={icon16} alt="" className="w-4 " />
              <img src={icon17} alt="" className="w-4 " />
              <img src={icon18} alt="" className="w-4 " />
              <div className="text-sm font-light">@asiitrade</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-10 h-[400px]">
        <div className="flex justify-between">
          <div>
            <img src={img2} className="w-[30rem]" alt="" />
          </div>
          <div>
            <img src={img3} alt="" className="w-80" />
          </div>
        </div>

        <div className="absolute left-1/2 top-8  -translate-x-1/2 text-center text-white flex flex-col items-center">
          <p className="text-[55px] font-bold w-80 leading-tight">
            Đầu tư thông minh
          </p>
          <p className="py-5 w-[500px]">
            Đăng ký và nhận $10.000 vào tài khoản demo. Bạn có thể trau dồi kỹ
            năng giao dịch của mình và khai thác nhiều cơ hội tài chính thông
            qua ASII Trade
          </p>
          <button className="bg-[#20BAA0] text-white rounded-md px-5 py-1.5">
            Dùng thử bản demo
          </button>
        </div>
      </div>
      <div class="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          <div className="text-center ">
            <p className="text-xl font-bold">815 992</p> Nhà giao dịch đang hoạt
            động hàng ngày
          </div>
          <div className="text-center border-x border-white">
            <p className="text-xl font-bold">133</p> Quốc gia chúng tôi hoạt
            động
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">32 846 222 </p>Lệnh giao dịch thành
            công trong tuần qua
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={img4} className="w-full" alt="" />
        <div className="absolute inset-0 text-white">
          <div class="container mx-auto h-full w-full">
            <div className="flex justify-between items-center h-full w-full">
              <div className="flex-1 mt-[-100px] pl-16">
                <p className="text-2xl font-bold pb-3.5">
                  Hãy giao dịch ở bất cứ nơi đâu!
                </p>
                <span className="text-lg">
                  Bạn có thể giao dịch mọi lúc mọi nơi thông qua trình duyệt web
                  ASII Trade dành cho iOS và Android. Hãy luôn theo dõi thông
                  tin mới nhất về các giờ đóng cửa giao dịch, chương trình
                  khuyến mại và giải đấu.
                </span>
              </div>
              <div className="flex-1">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 ">
        <div class="text-2xl text-white text-center ">Lợi ích của nền tảng</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 px-3 text-white mt-8">
          <div className="text-center flex flex-col items-center">
            <img className="w-9 h-9" src={icon4} alt="" />
            <p className="py-3 font-bold">Số dư tài khoản tối thiểu từ $10</p>
            <p className="text-sm font-light">
              Hãy bắt đầu thực hiện các giao dịch bằng những khoản vốn đầu tư
              tối thiểu.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img className="w-9 h-9" src={icon5} alt="" />
            <p className="py-3 font-bold">Giá trị giao dịch từ $1</p>
            <p className="text-sm font-light">
              Chi phí tối thiểu cho một giao dịch khá thấp. Bạn sẽ không mất số
              tiền lớn trong khi vẫn đang học cách giao dịch.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img className="w-9 h-9" src={icon6} alt="" />
            <p className="py-3 font-bold">
              Chế độ giao dịch độc đáo 'Không ngừng'
            </p>
            <p className="text-sm font-light">
              Nền tảng Binomo không giới hạn số lượng giao dịch mà bạn có thể
              chốt tại cùng một thời điểm. Bạn có thể mở nhiều vị thế cùng một
              lúc và tiếp tục giao dịch.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img className="w-9 h-9" src={icon7} alt="" />
            <p className="py-3 font-bold">Hoạt động cả vào cuối tuần</p>
            <p className="text-sm font-light">
              Một vài nguồn báo giá chỉ khả dụng trong các ngày làm việc. Chúng
              tôi đã kết hợp nhiều nguồn khác nhau để thuận tiện cho bạn: bạn có
              thể giao dịch cả vào cuối tuần để chọn loại tài sản phù hợp nhất
              với mình.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-white flex flex-col items-center">
        <div className="w-96">
          <div class="text-2xl  text-center">
            Sàn giao dịch đáng tin cậy của bạn
          </div>
          <p className="my-8 text-sm font-light">
            Tại ASII Trade, chúng tôi cam kết bảo vệ người dùng bằng các quy
            trình nghiêm ngặt và các biện pháp kỹ thuật hàng đầu trong ngành.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex px-3">
          <div className="flex-1">
            <div className="flex gap-5 items-center mb-10">
              <img className="w-9 h-9" src={icon8} alt="" />
              <div className="text-white">
                <p className="font-bold">
                  Quỹ tài sản an toàn cho người dùng (SAFU)
                </p>
                <p className="text-sm font-light">
                  Binance trích 10% phí giao dịch trong một quỹ tài sản đảm bảo
                  để bảo vệ một phần tiền của người dùng.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center mb-10">
              <img className="w-9 h-9" src={icon9} alt="" />
              <div className="text-white">
                <p className="font-bold">
                  Kiểm soát quyền truy cập theo ý muốn riêng
                </p>
                <p className="text-sm font-light">
                  Tính năng kiểm soát quyền truy cập cá nhân hóa cho phép bạn
                  hạn chế các thiết bị và địa chỉ có thể truy cập vào tài khoản
                  của bạn, giúp bạn yên tâm hơn.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center mb-10">
              <img className="w-9 h-9" src={icon10} alt="" />
              <div className="text-white">
                <p className="font-bold">Công nghệ mã hóa dữ liệu nâng cao</p>
                <p className="text-sm font-light">
                  Dữ liệu giao dịch của bạn được bảo mật thông qua công nghệ mã
                  hóa đầu cuối, đảm bảo chỉ bạn mới có quyền truy cập thông tin
                  cá nhân của mình.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center">
              <img src={img6} className="h-96" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="text-center">
          <div class="text-2xl text-white">
            Bắt đầu tăng thu nhập ngay hôm nay
          </div>
          <button
            className="text-black
              bg-[#FFF14B] px-5 py-1.5 mt-5 font-medium rounded-md"
          >
            Đăng kí ngay
          </button>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 px-3 gap-10 pt-10">
          <div className="text-white font-light text-sm">
            <p>
              18+ <br /> Giao dịch do Trang web này cung cấp chỉ có thể được
              thực hiện bởi người trưởng thành có đủ năng lực. Các giao dịch với
              sản phẩm tài chính do Trang web này cung cấp có liên quan đến
              những rủi ro lớn; vì thế, việc giao dịch có thể rất rủi ro. Nếu
              bạn thực hiện các Giao dịch với sản phẩm tài chính do Trang web
              này cung cấp, bạn có thể chịu những khoản thua lỗ lớn và thậm chí
              mất tất cả tiền trong tài khoản của mình. Trước khi bạn quyết định
              bắt đầu thực hiện Giao dịch với sản phẩm tài chính do Trang web
              này cung cấp, bạn phải xem xét kỹ Thỏa thuận Dịch vụ và thông tin
              trong thông báo Rủi ro. Trang web này thuộc về và được quản lý bởi
              Saledo Global LLC, địa chỉ đăng ký tại: Tầng 1, Tòa nhà First St.
              Vincent Bank Ltd, P.O. Box 1574, James Street, Kingstown, St.
              Vincent & the Grenadines. Đại lý là VISEPOINT LIMITED; số đăng ký:
              C 94716, đăng ký tại: ACT - BARON COURT, ĐƯỜNG KARLU GALEA, Thành
              phố/Vùng VICTORIA (GOZO) VCT 2604, Quốc gia MALTA.
            </p>
            <div className="flex gap-3 pt-10">
              <img src={icon11} className="w-[50px] h-[50px]" alt="" />
              <img src={icon12} className="w-[50px] h-[50px]" alt="" />
              <img src={icon13} className="w-[50px] h-[50px]" alt="" />
            </div>
          </div>
          <div className="text-white font-light text-sm">
            Liên hệ
            <br />
            support@abcxyz.com
            <br />
            Dolphin Corp LLCFirst Floor, First St. Vincent Bank Ltd Building,
            James Street, Kingstown, St.Vincent and the Grenadines
          </div>
        </div>
      </div>

      <footer className="pb-10">
        <div className="flex justify-center items-center pb-10 gap-3">
          <div className="rounded-full bg-[#2B3047] ">
            <img src={icon14} className="w-[50px] h-[50px] p-3" alt="" />
          </div>
          <div className="rounded-full bg-[#2B3047] ">
            <img src={icon15} className="w-[50px] h-[50px] p-3" alt="" />
          </div>
          <div className="rounded-full bg-[#2B3047] ">
            <img src={icon16} className="w-[50px] h-[50px] p-3" alt="" />
          </div>
          <div className="rounded-full bg-[#2B3047] ">
            <img src={icon17} className="w-[50px] h-[50px] p-3" alt="" />
          </div>
          <div className="rounded-full bg-[#2B3047] ">
            <img src={icon18} className="w-[50px] h-[50px] p-3" alt="" />
          </div>
        </div>
        <div className="text-white font-light text-sm text-center">
          Chính sách bảo mật
          <p className="py-5">2014-2022</p>
        </div>

        <div className="container mx-auto px-3 text-white font-light text-sm">
          Các hoạt động tài chính được cung cấp trên trang web này có thể liên
          quan đến rủi ro gia tăng. Khi sử dụng các dịch vụ và công cụ tài chính
          mà trang web này cung cấp, bạn có thể bị tổn thất tài chính nghiêm
          trọng hoặc mất hoàn toàn tiền trong tài khoản giao dịch của mình. Vui
          lòng đánh giá tất cả các rủi ro tài chính và nhận tư vấn từ một cố vấn
          tài chính độc lập trước khi giao dịch. Binomo không chịu trách nhiệm
          cho bất kỳ tổn thất trực tiếp, gián tiếp hoặc hậu quả hay bất kỳ thiệt
          hại nào khác do các hành động của người dùng trên trang web này.
        </div>
      </footer>
    </div>
  );
}

export default App;
