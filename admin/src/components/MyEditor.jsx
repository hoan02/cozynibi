import { useState, useRef, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageUploader", ImageUploader);

import newRequest from "../utils/newRequest";
import toastService from "../utils/toastService";

const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const reactQuillRef = useRef();

  const handleSubmit = () => {
    const editor = reactQuillRef.current.getEditor();
    const html = editor.getHTML();
    setEditorHtml(html);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = async () => {
              try {
                const res = await newRequest
                  .post(`image/create`, {
                    file: reader.result,
                    name: file.name,
                    folder: `posts`,
                  })
                  .then((res) => {
                    toastService.success("Tải ảnh thành công!");
                    resolve(res.data.image.url);
                  });
              } catch (err) {
                reject("Upload failed");
                console.log(err);
              }
            };
          });
        },
      },
    }),
    []
  );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
      <ReactQuill
        theme="snow"
        onChange={setEditorHtml}
        modules={modules}
        value={editorHtml}
        ref={reactQuillRef}
      />
    </>
  );
};

export default MyEditor;
