import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// Optional Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

import { Image } from 'astro:assets'
import ngocAnh from '../images/ngoc-anh.JPG';

// Example testimonial data
const testimonials = [
  {
    name: 'Chị Ngọc Anh',
    avatar: '../src/images/ngoc-anh.JPG',
    testimonial: 'Mình luôn ưu tiên những sản phẩm sạch, hữu cơ vì cảm thấy yên tâm hơn khi dùng cho da. Làn da mình thuộc dạng thường, không quá nhạy cảm nhưng mình vẫn thích chăm sóc bằng những gì tự nhiên nhất. Lúc thử sản phẩm này, điều đầu tiên mình thích là cảm giác rất nhẹ nhàng, không hề có mùi hóa chất khó chịu như một số loại khác. Dùng một thời gian, da mềm mại hơn hẳn, nhìn khỏe khoắn và tươi tắn hơn. Mình thấy đây là lựa chọn lý tưởng cho ai yêu thích các sản phẩm lành tính như mình.',
  },
  {
    name: 'Hồng Nhung',
    avatar: '../src/images/hong-nhung.jpg',
    testimonial: 'Mình mới làm mẹ lần đầu nên cái gì cũng lo lắng, đặc biệt là da của con. Mùa đông vừa rồi, hai má bé cứ khô nẻ, đỏ ửng lên, nhìn mà thương lắm. Lúc đó mình thật sự hoang mang vì không biết nên chọn loại nào. May mắn tìm được dòng kèm này, đọc kỹ thấy thành phần toàn tự nhiên nên mới dám dùng. Bôi thử sau một ngày thấy da con mềm hơn, đỏ rát cũng giảm hẳn. Thậm chí lỡ miệng con tiếp xúc với kem mình cũng không lo, vì biết là lành tính. Đúng là cứu tinh cho mẹ bỉm như mình.',
  },
  {
    name: 'Chị Nụ',
    avatar: '../src/images/anh-tho.jpg',
    testimonial: 'Da mình thuộc dạng siêu khô. Nhất là vào mùa đông còn có cảm giác ngừa râm ran khá là khó chịu. Lần đầu dùng mình thấy cảm giác ngứa dịu đi hẳn, sáng ngày mai sau khi rửa mặt trên bề mặt da vẫn có cảm giác ẩm mịn, sờ mướt tay. Sau khoảng 3-4 ngày sử dụng thì quan sát thấy da có sáng hơn, vết thâm mụn mờ đi rất rõ.',
  },
  {
    name: 'Anh Dũng',
    avatar: '../src/images/anh-dung.jpg',
    testimonial: 'Anh làm cơ khí, da tay thường xuyên khô ráp, nứt nẻ do tiếp xúc với nhiệt và dầu nhớt. Có nhiều hôm, cả bàn tay đau nhức vì da bị căng và bong tróc. Ban đầu anh không để ý chuyện dưỡng da vì nghĩ đó là việc của phụ nữ, nhưng vợ đưa cho loại kem này bảo thử. Dùng vài ngày thấy dịu hẳn, vết nứt lành nhanh. Anh thích nhất là hộp nhỏ gọn, dễ bỏ túi quần, tiện mang theo bên người để khi nào thấy cần là dùng ngay.',
  },
];

export default function Testimonials() {
  return (
    <div className="p-4">
      <div className='text-4xl mt-4'>Người dùng đánh giá</div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-xl mx-auto"
        onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      >
        {testimonials.map(({ name, avatar, testimonial }) => (
          <SwiperSlide key={name}>
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
              <img
                src={avatar}
                alt={name}
                className="w-18 h-18 rounded-full mb-4"
              />
             
              <p className="text-center text-lg text-gray-700 italic mb-4">"{testimonial}"</p>
              <h3 className="text-center text-sm font-semibold text-gray-900">- {name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}