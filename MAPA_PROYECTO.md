# 🗺️ MAPA DEL PROYECTO - TiendaCel v2.0

```
TiendaCelAPI/
│
├── 📱 FRONTEND
│   └── frontend/
│       ├── 📄 package.json
│       ├── 🎨 vite.config.js
│       ├── 📋 eslint.config.js
│       ├── README.md
│       │
│       ├── 🌐 public/
│       │   ├── favicon.svg
│       │   ├── icons.svg
│       │   └── 🔥 tiendacel.html ✅ ACTUALIZADO
│       │       ├── HTML5 completo
│       │       ├── Estilos CSS embebidos
│       │       └── JavaScript con:
│       │           ├── llamarAppsScript()    [CORS configurado]
│       │           ├── crearVenta()          [Validación + refresco]
│       │           ├── comprarProducto()     [Sincronización]
│       │           ├── renderVentas()        [UI tabla ventas]
│       │           ├── renderProductos()     [UI catálogo]
│       │           ├── renderClientes()      [UI clientes]
│       │           └── ... 8+ funciones más
│       │
│       └── src/
│           ├── App.jsx           [Renderiza iframe]
│           ├── App.css
│           ├── main.jsx          [Punto entrada React]
│           ├── index.css
│           └── assets/
│
├── ⚙️ BACKEND (Azure Functions)
│   ├── backend/
│   │   ├── package.json
│   │   │
│   │   ├── index.js             [API principal Azure]
│   │   │
│   │   ├── controllers/
│   │   │   └── dashboardController.js
│   │   │
│   │   ├── routes/
│   │   │   └── dashboardRoutes.js
│   │   │
│   │   └── services/
│   │       └── sheetsService.js  [Conexión a Sheets]
│   │
│   ├── src/functions/
│   │   └── registrarMovimiento.js  [Función Azure]
│   │
│   ├── host.json
│   ├── local.settings.json
│   └── package.json
│
└── 📚 DOCUMENTACIÓN NUEVA ✨
    ├── 📘 RESUMEN_IMPLEMENTACION.md
    │   └── Visión general de cambios
    │
    ├── 📗 INTEGRACION_APPS_SCRIPT.md
    │   ├── Flujo completo
    │   ├── Ejemplos de payload
    │   ├── Arquitectura
    │   └── Solución de problemas
    │
    ├── 📙 QUICK_START.md
    │   ├── Verificación rápida
    │   ├── Cómo ejecutar
    │   ├── Casos de prueba
    │   └── Debugging
    │
    ├── 📕 CAMBIOS_TECNICOS.md
    │   ├── Comparativa antes/después
    │   ├── Detalles técnicos
    │   └── Mejoras de performance
    │
    └── 🗺️ MAPA_PROYECTO.md [Este archivo]
```

---

## 🎯 ARCHIVO CRÍTICO: `tiendacel.html`

Este es el archivo donde TODA la magia ocurre:

```
tiendacel.html
├── <head>
│   ├── Fuentes Google (Syne, DM Sans)
│   ├── Variables CSS (colores, espacios)
│   └── Estilos embebidos (~700 líneas)
│
├── <body>
│   ├── #splash               [Pantalla de carga]
│   │   └── Animación inicial
│   │
│   ├── #loginScreen          [Pantalla de login]
│   │   ├── Tabs: Login/Registrar
│   │   ├── Formulario login
│   │   └── Formulario registrar
│   │
│   └── #panelScreen          [Panel principal]
│       ├── .sidebar          [Menú lateral]
│       │   ├── Logo + usuario
│       │   ├── Rol badge
│       │   ├── Nav buttons
│       │   └── Logout
│       │
│       └── .main             [Contenido principal]
│           └── #contenidoModulo [Renderizado dinámico]
│               ├── Banners
│               ├── Stats
│               ├── Formularios
│               ├── Tablas
│               └── Gráficos
│
└── <script>
    ├── CONFIG
    │   ├── PERMISOS [Por rol]
    │   ├── MODULOS [Navegación]
    │   └── SESSION [Usuario actual]
    │
    ├── UTILIDADES
    │   ├── v(id)              [Get input value]
    │   ├── sv(id, val)        [Set input value]
    │   ├── toast()            [Notificaciones]
    │   ├── setMsg()           [Mensajes formulario]
    │   └── ... más helpers
    │
    ├── ⭐ LLAMADAS APPS SCRIPT
    │   ├── APPS_SCRIPT_URL    [Configuración]
    │   └── llamarAppsScript() [Fetch POST con CORS]
    │
    ├── 🔐 SESIÓN
    │   ├── verificarSesionGoogle()
    │   ├── iniciarSistema()
    │   └── cargarData()
    │
    ├── 📱 PANTALLAS
    │   ├── renderHome()
    │   ├── renderVentas()      ⭐ CON FORMULARIO + LÓGICA
    │   ├── renderProductos()
    │   ├── renderCatalogo()
    │   ├── renderClientes()
    │   ├── renderEmpleados()
    │   ├── renderInventario()
    │   ├── renderInformes()
    │   ├── renderSedes()
    │   └── renderUsuarios()
    │
    ├── ⭐ FUNCIONES CLAVE
    │   ├── crearVenta()        [ACTUALIZADA: Validación + refresco]
    │   ├── comprarProducto()   [ACTUALIZADA: Sincronización]
    │   ├── eliminarVenta()
    │   ├── crearProducto()
    │   ├── guardarProducto()
    │   ├── suspenderProducto()
    │   ├── eliminarProducto()
    │   └── ... 10+ más
    │
    ├── 📊 UTILIDADES DE DATOS
    │   ├── getDemoData()       [Modo demo local]
    │   ├── hojaComoObjeto()    [Serializar hojas]
    │   └── tabla()             [Renderizar tablas]
    │
    ├── 🎨 HELPERS VISUALES
    │   ├── cardStat()          [Tarjetas estadísticas]
    │   ├── imgTag()            [Renderizar imágenes]
    │   ├── filtrarTabla()      [Búsqueda en vivo]
    │   ├── filtrarCatalogo()   [Búsqueda catálogo]
    │   ├── toggleForm()        [Mostrar/ocultar forms]
    │   └── cerrarSesion()      [Logout]
    │
    └── 🔄 CICLO DE VIDA
        ├── window.onload()     [Verificar sesión]
        ├── iniciarPanel()      [Cargar panel]
        ├── mostrarModulo()     [Cambiar sección]
        └── recargarYRefrescar()[Sincronizar Sheets]
```

---

## 🔄 FLUJO DE DATOS

### Inicio de Sesión
```
window.onload()
    ↓
verificarSesionGoogle() [Llamada a Apps Script]
    ↓
Si Google autenticado → mostrarBotonEntrar()
Si no → mostrarLogin()
    ↓
Usuario hace login
    ↓
iniciarSistema() [Llamada a Apps Script]
    ↓
SESSION = { user, data }
    ↓
iniciarPanel(user, data)
    ↓
renderHome() / mostrarModulo('home')
```

### Crear Venta
```
usuario hace click "+ Nueva venta"
    ↓
toggleForm('fVenta') [Abre formulario]
    ↓
Usuario llena campos:
├── vtProducto
├── vtCantidad
├── vtNombreCliente
├── vtCliente
└── vtVendedor
    ↓
Usuario hace click "💾 Guardar"
    ↓
crearVenta() [AQUÍ OCURRE LA MAGIA]
    ├── Valida campos en cliente
    ├── Desactiva botón
    ├── Hace fetch POST a Apps Script
    │   └── Header: Content-Type: text/plain
    │   └── Mode: cors
    │   └── Body: { accion, datos }
    ├── Espera respuesta
    ├── Si success:
    │   ├── Actualiza SESSION.data.productos[].stock
    │   ├── Actualiza SESSION.data.inventario[].stock
    │   ├── Agrega nueva venta a SESSION.data.ventas
    │   ├── Limpia formulario
    │   ├── Cierra formulario
    │   ├── Llama mostrarModulo('ventas')
    │   ├── Re-renderiza tabla
    │   ├── Toast verde
    │   └── ✅ LISTO (sin recargar página)
    ├── Si error:
    │   ├── Muestra mensaje del servidor
    │   ├── Reactiva botón
    │   ├── Toast rojo
    │   └── Usuario puede reintentar
    └── Fin
```

---

## 🎨 COMPONENTES PRINCIPALES

### 1. SPLASH SCREEN
```html
#splash
├── .sp-logo         [Emoji animado]
├── .sp-title        [TiendaCel]
├── .sp-ring         [Spinner]
├── .sp-msg          [Mensaje dinámico]
└── .sp-btn          [Botón "Entrar al panel"]
```

### 2. LOGIN SCREEN
```html
#loginScreen
├── .wrap
│   └── .card
│       ├── .card-logo
│       ├── .quick-modules     [6 iconos]
│       ├── .tabs              [Login/Registrar]
│       ├── #loginBox
│       │   ├── Usuario input
│       │   ├── Password input
│       │   ├── Login button
│       │   └── #msgLogin
│       └── #regBox             [Similar]
```

### 3. PANEL PRINCIPAL
```html
#panelScreen
├── .sidebar
│   ├── .sb-brand          [Logo]
│   ├── .user-badge        [Usuario + rol]
│   ├── .nav-title         [Módulos]
│   ├── nav#navMenu        [Botones dinámicos]
│   └── .btn-logout        [Salir]
│
└── .main
    ├── .banner            [Bienvenida]
    └── #contenidoModulo   [Dinámico según módulo]
```

### 4. MÓDULO VENTAS
```html
.module-card
├── h3                      [Título]
├── .toolbar
│   ├── Búsqueda input
│   ├── Filtro estado
│   └── + Nueva venta button
├── .stats-grid             [Total, completadas, etc]
├── .form-inline #fVenta   [FORMULARIO DE VENTAS]
│   ├── .fi-grid
│   │   ├── vtProducto
│   │   ├── vtCantidad
│   │   ├── vtNombreCliente
│   │   ├── vtCliente
│   │   └── vtVendedor
│   ├── .fi-actions
│   │   ├── Guardar button
│   │   └── Cancelar button
│   └── #msgVenta          [Mensajes]
└── tabla #tVentas
    ├── thead [Headers]
    └── tbody [Filas dinámicas]
```

---

## 🔌 INTEGRACIONES EXTERNAS

### Google Apps Script
```
POST https://script.google.com/macros/s/AKfycby5sJD1zP1mD_48qQ3dZKueHYEnkXSwJxcJ50ghJNEAguFUB012N_PYIyJe_PgfcQLuog/exec

Funciones que llama:
├── iniciarSistema          [Login]
├── verificarSesionGoogle   [Auto-login]
├── obtenerDatosCompletos   [Refresco]
├── registrarUsuario        [Crear usuario]
├── crearVenta              ⭐ [PRINCIPAL]
├── eliminarVenta
├── crearProducto
├── eliminarProducto
├── suspenderProducto
├── crearCliente
├── eliminarCliente
├── crearEmpleado
├── eliminarEmpleado
├── crearSede
├── eliminarSede
└── crearInforme
```

### Google Sheets
```
Hojas sincronizadas:
├── usuarios       [Cuentas de acceso]
├── productos      [Catálogo]
├── clientes       [Contactos]
├── ventas         [Transacciones] ⭐
├── inventario     [Stock] ⭐
├── facturas       [Autogeneradas] ⭐
├── empleado       [Personal]
├── informes       [Bitácoras] ⭐
├── sedes          [Sucursales]
└── ficha_tecnica  [Especificaciones]

⭐ = Afectadas por crearVenta()
```

---

## 📊 ESTADO LOCAL (SESSION)

```javascript
SESSION = {
  user: {
    usuario: "vendedor1",
    nombre: "Ana Vendedor",
    rol: "vendedor",
    token: "tok002",
    idRelacion: "2"
  },
  
  data: {
    headers: {
      productos: ['id_producto','marca','modelo','descripcion','precio','stock','imagen'],
      ventas: ['id_venta','fecha','total','estado','id_cliente','usuario_vendedor'],
      inventario: ['id_producto','nombre','stock_actual','stock_minimo','estado'],
      clientes: [...],
      // etc
    },
    
    productos: [
      ['1','Samsung','Galaxy S24','Smartphone',320000,'10','URL'],
      ['2','Apple','iPhone 15','Smartphone',600000,'5','URL'],
      // etc
    ],
    
    ventas: [
      ['1','2025-04-01',320000,'completada','1','vendedor1'],
      // etc
    ],
    
    inventario: [
      ['1','Samsung Galaxy S24','10','5','activo'],
      // etc
    ],
    
    // ... clientes, empleado, informes, sedes, etc
    
    resumen: {
      totalClientes: 3,
      totalProductos: 3,
      totalVentas: 10,
      totalFacturas: 8,
      totalEmpleados: 2,
      totalSedes: 2
    }
  }
}
```

**Esta es la "base de datos en memoria" del frontend que se actualiza con cada operación.**

---

## 🎯 ARCHIVOS QUE MODIFICASTE (O DEBERÍA REVISAR)

### CRÍTICO ⭐
- `frontend/public/tiendacel.html` ← Actualizado al 100%

### IMPORTANTE ✅
- `frontend/package.json` ← Verifica dependencias
- `frontend/vite.config.js` ← Configuración Vite

### INFORMATIVO 📚
- Todos los `.md` nuevos ← Documentación

---

## 🚀 CÓMO NAVEGAR EL CÓDIGO

### Si quieres entender el FLUJO de una venta:
1. Lee: `QUICK_START.md` → Sección "Probar Ventas"
2. Lee: `INTEGRACION_APPS_SCRIPT.md` → Sección "Flujo Completo"
3. Ve a: `tiendacel.html` línea 730
4. Lee: `crearVenta()` completa

### Si quieres entender ARQUITECTURA:
1. Lee: `RESUMEN_IMPLEMENTACION.md` → "Arquitectura implementada"
2. Lee: `INTEGRACION_APPS_SCRIPT.md` → "Arquitectura de responsabilidades"
3. Lee: `CAMBIOS_TECNICOS.md` → "Comparativa antes/después"

### Si quieres DEBUGGING:
1. Lee: `QUICK_START.md` → Sección "Debugging"
2. Abre: F12 (DevTools) → Network
3. Haz una venta y observa el request/response
4. Compara con ejemplos en `INTEGRACION_APPS_SCRIPT.md`

### Si quieres MEJORAR:
1. Lee: `CAMBIOS_TECNICOS.md` → "Mejoras de performance"
2. Lee: `RESUMEN_IMPLEMENTACION.md` → "Próximos pasos opcionales"
3. Identifica qué quieres mejorar
4. Modifica `tiendacel.html`
5. Prueba cambios localmente

---

## 📋 CHECKLIST PARA VERIFICAR

- [ ] `tiendacel.html` tiene APPS_SCRIPT_URL correcto
- [ ] Headers CORS en `llamarAppsScript()` son exactos
- [ ] `crearVenta()` valida cantidad > 0
- [ ] `crearVenta()` desactiva/reactiva botón
- [ ] `crearVenta()` actualiza SESSION.data.productos
- [ ] `crearVenta()` actualiza SESSION.data.inventario
- [ ] `crearVenta()` agrega nueva venta al array
- [ ] `crearVenta()` limpia formulario
- [ ] `crearVenta()` cierra formulario
- [ ] `crearVenta()` muestra mensaje servidor
- [ ] Página NO recarga después de venta
- [ ] Stock se actualiza inmediatamente
- [ ] Errores se muestran claramente

---

## 🎓 REFERENCIAS

| Tema | Archivo | Sección |
|------|---------|---------|
| Visión general | RESUMEN_IMPLEMENTACION.md | Todo |
| Cómo ejecutar | QUICK_START.md | Ejecutar la aplicación |
| Flujo datos | INTEGRACION_APPS_SCRIPT.md | Flujo completo de una venta |
| Headers CORS | CAMBIOS_TECNICOS.md | Cambio 1 |
| Refresco automático | CAMBIOS_TECNICOS.md | Cambio 2 |
| Debugging | QUICK_START.md | Debugging |
| Código | tiendacel.html | línea 305, 730, 1000 |

---

**Última actualización:** Mayo 20, 2026  
**Por:** GitHub Copilot  
**Versión:** 2.0  

Espero que este mapa te ayude a navegar el proyecto. 🗺️✨

