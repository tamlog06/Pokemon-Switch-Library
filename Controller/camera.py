import os
import cv2
import time, datetime

class Camera:
    def __init__(self, width=720, height=1280, base_dir='./capture'):
        self.camera = None
        self.size = (width, height)
        self.base_dir = base_dir
        if not os.path.exists(base_dir):
            print(f"Create directory: {base_dir}")
            os.makedirs(base_dir)

    # check whether camera is opened
    def isOpened(self):
        if self.camera is None or not self.camera.isOpened():
            return False
        else:
            return True

    # open camera
    def open(self, Id):
        if self.camera is not None and self.camera.isOpened():
            self.camera.release()

        self.camera = cv2.VideoCapture(Id)
        # if not self.camera.isOpened():
        if not self.isOpened():
            print(f"Cannot open camera ID: {Id}")
            # TODO
            # raise error here
            return False

        print(f"Opened camera ID: {Id} successfully")
        self.camera.set(cv2.CAP_PROP_FRAME_WIDTH, self.size[0])
        self.camera.set(cv2.CAP_PROP_FRAME_HEIGHT, self.size[1])
        self.camera.set(cv2.CAP_PROP_FPS, 60)

        return True

    # get frame from camera
    def capture(self):
        if not self.isOpened:
            print("Camera is not opened")
            return None
        
        ret, frame = self.camera.read()
        if not ret:
            print("Cannot capture frame")
            return None

        return frame

    # save captured frame
    def saveCapture(self, filename='', ext='png'):
        frame = self.capture()
        if frame is None:
            return False

        if filename == '':
            dt_now = datetime.datetime.now()
            filename = dt_now.strftime("%Y-%m-%d_%H-%M-%S")

        if not ext in ['png', 'jpg', 'jpeg']:
            print("Warning: Invalid extension")
            print("ext must be selected from ['png', 'jpg', 'jpeg']")
            print("Use png instead")
            ext = 'png'

        filename = filename + '.' + ext
        filepath = os.path.join(self.base_dir, filename)
        print(f"Save captured frame to : {filepath}")
        cv2.imwrite(filepath, frame)
        
        return True

    # destroy camera
    def destroy(self):
        if self.isOpened():
            print(f"Close camera ID: {self.camera.get(cv2.CAP_PROP_BACKEND)}")
            self.camera.release()
            self.camera = None
        else:
            print("Camera is not opened")
            return False

        return True
