document.getElementById("convertButton").addEventListener("click", async () => {
  const input = document.getElementById("imageInput");
  const output = document.getElementById("output");

  if (!input.files.length) {
    alert("Please select images to convert.");
    return;
  }

  output.innerHTML = "";

  for (const file of input.files) {
    const image = new Image();
    const reader = new FileReader();

    reader.onload = (event) => {
      image.src = event.target.result;
    };

    reader.readAsDataURL(file);

    await new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 1000;
        if (image.width > maxWidth) {
          const scale = maxWidth / image.width;
          canvas.width = maxWidth;
          canvas.height = image.height * scale;
        } else {
          canvas.width = image.width;
          canvas.height = image.height;
        }

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const adjustQualityAndSize = (quality) => {
          return new Promise((res) => {
            canvas.toBlob(
              (blob) => {
                if (blob.size <= 80000 || quality <= 0.1) {
                  res(blob);
                } else {
                  res(adjustQualityAndSize(quality - 0.1));
                }
              },
              "image/webp",
              quality
            );
          });
        };

        adjustQualityAndSize(0.8).then((blob) => {
          const webpUrl = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = webpUrl;
          link.download = `photos/${file.name.replace(/\.[^/.]+$/, ".webp")}`;
          link.textContent = `Download ${file.name}`;
          link.className = "btn btn-success d-block my-2";

          link.addEventListener("click", (e) => {
            e.preventDefault();
            const a = document.createElement("a");
            a.href = webpUrl;
            a.download = `photos/${file.name.replace(/\.[^/.]+$/, ".webp")}`;
            a.click();
          });

          output.appendChild(link);
          resolve();
        });
      };
    });
  }
});
