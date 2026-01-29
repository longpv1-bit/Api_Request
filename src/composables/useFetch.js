import axios from "axios";
import { ref } from "vue";
export function useFetch(url) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true;
    //Lần 1 – API lỗi, Lần 2 – API thành công (NHƯNG không reset error) như này thì error sẽ có giá trị
    error.value = null;
    try {
      // tạo Promise nhưng KHÔNG await nó sẽ chạy code dưới nó rồi mới vào finally chạy ngay lập tức
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axios.get(url);
      // ref.value thay đổi
      // component đang dùng ref đó trong template, Vue tự động re-render DOM
      data.value = response.data;
    } catch (error) {
      error.value = error;
    } finally {
      isLoading.value = false;
    }
  };
  return { data, isLoading, error, fetchData };
}
