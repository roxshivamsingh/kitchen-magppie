import galleryOne from '../../assets/gallery/one.png'
import galleryTwo from '../../assets/gallery/two.png'
import galleryThree from '../../assets/gallery/three.png'
import galleryFour from '../../assets/gallery/four.png'
import galleryFive from '../../assets/gallery/five.png'
// import gallerySix from '../../assets/gallery/six.png'
// import gallerySeven from '../../assets/gallery/seven.png'
// import galleryEight from '../../assets/gallery/eight.png'
import galleryNine from '../../assets/gallery/nine.png'
import galleryTen from '../../assets/gallery/ten.png'
import galleryEleven from '../../assets/gallery/eleven.png'

const _storage = {
    0: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/landing%2Fgallery-10.png?alt=media&token=88899726-6643-4980-a74f-08275f95adec',
    1: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/landing%2Fgallery-9.png?alt=media&token=e65f2f0b-4699-4ed5-bafa-4286ec2aeb68',
    2: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/landing%2Fgallery-8.png?alt=media&token=346255e7-ba1f-4fab-8246-f719c028a997'
}
export const galleries = [
    { id: 1, src: galleryOne, colSpan: 1, rowSpan: 1 },
    { id: 2, src: galleryTwo, colSpan: 1, rowSpan: 1 },
    { id: 3, src: galleryThree, colSpan: 2, rowSpan: 1 },
    { id: 4, src: galleryFour, colSpan: 1, rowSpan: 1 },
    { id: 5, src: galleryFive, colSpan: 1, rowSpan: 1 }, //common
    { id: 6, src: _storage[1], colSpan: 1, rowSpan: 2, height: 1 }, //common
    { id: 7, src: _storage[2], colSpan: 1, rowSpan: 2, height: 1 }, //common
    { id: 8, src: _storage[0], colSpan: 2, rowSpan: 1 },
    { id: 9, src: galleryNine, colSpan: 2, rowSpan: 1 },
    { id: 10, src: galleryTen, colSpan: 1, rowSpan: 1 },
    { id: 11, src: galleryEleven, colSpan: 1, rowSpan: 1 },
]
