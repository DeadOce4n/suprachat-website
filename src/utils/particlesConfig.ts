import type { IParticlesProps } from 'react-particles'

const particlesOptions: IParticlesProps['options'] = {
  fullScreen: { enable: true, zIndex: -10 },
  interactivity: {
    events: {
      onClick: { enable: false, mode: 'repulse' },
      onHover: { enable: false, mode: 'bubble' }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: 0
      }
    }
  },
  particles: {
    color: { value: '#BEB7A4' },
    links: {
      color: { value: '#ffffff' },
      distance: 150,
      opacity: 0.4
    },
    move: {
      attract: {
        rotate: { x: 600, y: 600 }
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
        default: 'out'
      },
      random: true,
      speed: 1
    },
    number: {
      density: { enable: true },
      value: 160
    },
    opacity: {
      random: { enable: true, minimumValue: 0 },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0
      }
    },
    size: {
      random: { enable: true, minimumValue: 1 },
      value: { min: 1, max: 3 },
      animation: {
        speed: 4,
        minimumValue: 0.3
      }
    }
  }
}

export default particlesOptions
