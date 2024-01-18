Taiwlind config

```sh
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'pulseScale': 'scaleUp 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
```

cubic-bezier(0.4, 0, 0.6, 1) instead of ease-in/ease-out etc