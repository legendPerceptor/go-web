import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna
        porttitor, vulputate urna non, suscipit tortor. Nam sit amet nibh ex.
        Aenean viverra lacus at elementum eleifend. Donec tincidunt eros at
        pharetra congue. Vivamus eleifend pretium mi, auctor euismod nulla
        pulvinar ut. In volutpat maximus fermentum. Pellentesque non augue
        vehicula, luctus nibh ut, pretium tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec lacus est, sodales a justo sit amet,
        ultrices lacinia erat. Vestibulum pretium luctus turpis vitae rhoncus.
        Quisque sed placerat augue. Donec pellentesque, libero faucibus
        tincidunt viverra, nisi ante molestie neque, in consectetur nunc lorem
        sit amet justo. Morbi in lorem tellus. Pellentesque in magna at eros
        vehicula gravida.
      </p>
    </div>
  );
}
export default ModalPage;
