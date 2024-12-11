# Image to WebP Converter for E-commerce Applications

## Overview

This project provides a browser-based tool to convert images into the WebP format, optimized for e-commerce applications. The converter ensures smaller file sizes (maximum 80 KB) and maintains a maximum image width of 1000px, while automatically scaling the height proportionally. This helps improve the performance and user experience of e-commerce platforms by enhancing page load times and optimizing image quality.

---

## Features

1. **Convert to WebP**: Converts uploaded images to the WebP format with reduced file size and optimized quality.
2. **Max Image Dimensions**: Ensures the width of images is capped at 1000px, with proportional height adjustment.
3. **File Size Constraint**: Automatically adjusts compression quality to keep the file size below 80 KB.
4. **Batch Processing**: Supports multiple image uploads for batch conversion.
5. **User-Friendly UI**: Built with Bootstrap for a responsive and clean user interface.
6. **Downloadable Output**: Allows users to download converted images with appropriate naming and folder structure.

---

## How to Use

1. Open the tool in a web browser.
2. Select one or more image files using the "Select Images" input field.
3. Click the "Convert to WebP" button.
4. The converted images will appear as downloadable links.
5. Click each link to download the WebP images to the `photos/` folder.

---

## Technical Details

- **Technology Used**:
  - HTML5
  - JavaScript (Canvas API for image processing)
  - Bootstrap 5 for styling
- **Image Processing Logic**:
  - Images exceeding 1000px in width are scaled down.
  - Compression quality is adjusted dynamically to meet the 80 KB size limit.

---

## Integration for E-commerce

This tool can be integrated into an e-commerce application as a pre-upload processing step for product images. It ensures:

- Faster image delivery on web pages.
- Improved SEO due to optimized images.
- Consistent product image dimensions across the platform.

---

## Future Enhancements

1. Support for drag-and-drop image uploads.
2. Integration with cloud storage solutions (e.g., AWS S3, Firebase Storage).
3. Real-time image preview before conversion.
4. Backend support for additional image processing features.

---

## License

This project is open-source and available for use under the MIT License.

