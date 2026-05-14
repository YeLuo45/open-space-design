# Communication Gateway

> Multi-channel message gateway supporting WhatsApp, Feishu, and more.

## 1. Overview

OpenSpace Communication Gateway enables agents to receive and respond to messages from external platforms.

## 2. Supported Channels

| Channel | Adapter | Auth | Status |
|---------|---------|------|--------|
| **WhatsApp** | Baileys bridge | QR code | ✅ |
| **Feishu** | HTTP webhook | App credentials | ✅ |

## 3. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  Communication Gateway                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  WhatsApp    │  │   Feishu     │  │   Future     │     │
│  │  Adapter    │  │   Adapter    │  │   Channels   │     │
│  └──────┬───────┘  └──────┬───────┘  └──────────────┘     │
│         │                 │                                 │
│         └────────┬────────┘                                 │
│                  ▼                                           │
│         ┌────────────────┐                                   │
│         │    Session     │                                   │
│         │    Store       │                                   │
│         └────────┬───────┘                                   │
│                  ▼                                           │
│         ┌────────────────┐                                   │
│         │    Message     │                                   │
│         │    Router      │                                   │
│         └────────┬───────┘                                   │
│                  │                                           │
│                  ▼                                           │
│         ┌────────────────┐                                   │
│         │    Reply      │                                   │
│         │    Dispatch   │                                   │
│         └───────────────┘                                   │
└─────────────────────────────────────────────────────────────┘
```

## 4. Features

### Inbound Support
- Text messages
- Rich text posts
- Images and files
- Audio and media
- Interactive cards

### Outbound Support
- Streaming progress cards
- Image responses
- File/media responses

### Visual Processing
- Multi-modal image input (first轮)
- Screenshot analysis

## 5. Session Management

Per-channel session persistence:
- Conversation history tracking
- Context preservation
- Multi-turn dialog support

## 6. Access Control

Allowlist-based access control:
```python
# Only allow specific users
allowed_users = ["user_id_1", "user_id_2"]
```

## 7. Setup

### Feishu Setup
```bash
pip install lark-oapi
python openspace/communication/adapters/feishu.py
```

Configuration in `openspace/config/`:
```python
fs_app_id = "cli_xxx"
fs_app_secret = "xxx"
fs_allowed_users = ["ou_xxx"]
```

### WhatsApp Setup
```bash
pip install baileys
python openspace/communication/adapters/whatsapp.py
```

First launch shows QR code for authentication.

## 8. Message Types

| Type | Description |
|------|-------------|
| `ChannelMessage` | Incoming message |
| `ChannelSource` | Platform source (whatsapp/feishu) |
| `SendResult` | Delivery status |

## 9. Configuration

See full configuration guide:
- [`openspace/config/README.md`](https://github.com/HKUDS/OpenSpace/blob/main/openspace/config/README.md)
