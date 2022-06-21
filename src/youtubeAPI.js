//생성자는 대문자여야 하는데.. 이건 소문자로 만들어도 된다?!
// 스와이퍼?

export default class Youtube{
    constructor(){ // 초기값
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
    }

    //mostpopular method

    // mostPopular(){
    //     return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCJ6Y0HU8_fj-Lw_Q03JpoeRAue4GAbUHQ", this.getRequestOptions) //class 기반은 this가 빠지면 안 된다.
    //     .then((response) => response.json())
    //     .then((result) => result.items)
    //     .catch((error) => console.log('error', error));
    // }

    //비동기 처리
    async mostPopular(){
        try {
            const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCJ6Y0HU8_fj-Lw_Q03JpoeRAue4GAbUHQ", this.getRequestOptions) //class 기반은 this가 빠지면 안 된다.
                ;
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    //mostpopular search
    async search(query){
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCJ6Y0HU8_fj-Lw_Q03JpoeRAue4GAbUHQ`, this.getRequestOptions);
            const result_1 = await response.json();
            return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        } catch (error) {
            return console.log('error', error);
        }
    }

}